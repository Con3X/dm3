import axios from 'axios';
import { log } from '../shared/log';
import { EncryptionEnvelop, Envelop } from '../messaging/Messaging';
import { Connection } from '../web3-provider/Web3Provider';
import { SignedProfileRegistryEntry } from '../account/Account';
import { UserDB } from '..';
import { Acknoledgment } from '../delivery';
import { formatAddress } from './InjectedWeb3API';

const DELIVERY_SERVICE =
    (process.env.REACT_APP_BACKEND as string) + '/deliveryService';
const AUTH_SERVICE = (process.env.REACT_APP_BACKEND as string) + '/auth';

function createJsonRpcRequest(method: string, params: any, id = 1) {
    return {
        jsonrpc: '2.0',
        method,
        params,
        id,
    };
}

export async function getChallenge(accountAddress: string): Promise<string> {
    return (await axios.get(AUTH_SERVICE + `/${formatAddress(accountAddress)}`))
        .data.challenge;
}
export type GetChallenge = typeof getChallenge;

export async function getNewToken(
    accountAddress: string,
    signature: string,
): Promise<string> {
    return (
        await axios.post(AUTH_SERVICE + `/${formatAddress(accountAddress)}`, {
            signature,
        })
    ).data.token;
}
export type GetNewToken = typeof getNewToken;

export async function submitProfileRegistryEntry(
    accountAddress: string,
    signedProfileRegistryEntry: SignedProfileRegistryEntry,
): Promise<string> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('submitProfileRegistryEntry', {
                accountAddress: accountAddress,
                signedProfileRegistryEntry,
            }),
        )
    ).data;
    if (request.error) {
        throw Error('submitProfileRegistryEntry failed.');
    }

    return request.result;
}
export type SubmitProfileRegistryEntry = typeof submitProfileRegistryEntry;

export async function submitMessage(
    connection: Connection,
    userDb: UserDB,
    envelop: Envelop | EncryptionEnvelop,
    onSuccess: () => void,
    onError: () => void,
): Promise<void> {
    if (connection.socket) {
        connection.socket.emit(
            'submitMessage',
            {
                envelop,
                token: userDb.deliveryServiceToken,
            },
            (response: string) => {
                if (response === 'success') {
                    log(`- success`);
                    onSuccess();
                } else {
                    log(`- error`);
                    onError();
                }
            },
        );
    }
}
export type SubmitMessage = typeof submitMessage;

export async function syncAcknoledgment(
    connection: Connection,
    acknoledgments: Acknoledgment[],
    userDb: UserDB,
    lastMessagePull: number,
): Promise<void> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('syncAcknoledgment', {
                accountAddress: connection.account!.address,
                token: userDb.deliveryServiceToken,
                acknoledgments,
                lastMessagePull,
            }),
        )
    ).data;
    if (request.error) {
        throw Error('syncAcknoledgment failed.');
    }
}
export type SyncAcknoledgment = typeof syncAcknoledgment;

export async function createPendingEntry(
    connection: Connection,
    userDb: UserDB,
    accountAddress: string,
    contactAddress: string,
): Promise<void> {
    if (connection.socket) {
        log(`Create pending entry`);
        connection.socket.emit('pendingMessage', {
            accountAddress,
            contactAddress,
            token: userDb.deliveryServiceToken,
        });
    }
}
export type CreatePendingEntry = typeof createPendingEntry;

export async function getNewMessages(
    connection: Connection,
    userDb: UserDB,
    contactAddress: string,
): Promise<EncryptionEnvelop[]> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('getMessages', {
                accountAddress: connection.account!.address,
                contactAddress,
                token: userDb.deliveryServiceToken,
            }),
        )
    ).data;

    if (request.error) {
        throw Error('getNewMessages failed.');
    }

    return request.result.messages;
}
export type GetNewMessages = typeof getNewMessages;

export async function getPendingConversations(
    connection: Connection,
    userDb: UserDB,
): Promise<string[]> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('getPendingConversations', {
                accountAddress: connection.account!.address,
                token: userDb.deliveryServiceToken,
            }),
        )
    ).data;

    if (request.error) {
        throw Error('getPendingConversations failed.');
    }

    return request.result.pendingConversations;
}
export type GetPendingConversations = typeof getPendingConversations;

export async function getProfileRegistryEntryOffChain(
    contact: string,
): Promise<SignedProfileRegistryEntry | undefined> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('getProfileRegistryEntry', {
                accountAddress: contact,
            }),
        )
    ).data;

    if (request.error) {
        throw Error('getProfileRegistryEntry failed.');
    }

    return request.result;
}
export type GetProfileRegistryEntryOffChain =
    typeof getProfileRegistryEntryOffChain;

export async function getPublicMessageHead(
    accountAddress: string,
): Promise<string | undefined> {
    const request = (
        await axios.post(
            DELIVERY_SERVICE,
            createJsonRpcRequest('getPublicMessageHead', {
                accountAddress: accountAddress,
            }),
        )
    ).data;

    if (request.error) {
        throw Error('getPublicMessageHead failed.');
    }

    return request.result;
}
export type GetPublicMessageHead = typeof getPublicMessageHead;