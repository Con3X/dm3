import {
    StorageEnvelopContainer,
    Conversation,
} from '@dm3-org/dm3-lib-storage';
import { StorageContextType } from '../StorageContext';

//Provide a mocked storage context
//Override the default values with the provided values
export const getMockedStorageContext = (
    override?: Partial<StorageContextType>,
) => {
    const defaultValues = {
        initialized: false,
        storeMessage: function (
            contact: string,
            envelop: StorageEnvelopContainer,
        ): void {
            throw new Error('Function not implemented.');
        },
        storeMessageBatch: function (
            contact: string,
            batch: StorageEnvelopContainer[],
        ): Promise<void> {
            throw new Error('Function not implemented.');
        },
        editMessageBatchAsync: function (
            contact: string,
            batch: StorageEnvelopContainer[],
        ): void {
            throw new Error('Function not implemented.');
        },
        getConversations: function (page: number): Promise<Conversation[]> {
            return Promise.resolve([
                {
                    contactEnsName: 'max.eth',
                    isHidden: false,
                    messageCounter: 1,
                },
            ]);
        },
        addConversationAsync: function (contact: string): void {
            throw new Error('Function not implemented.');
        },
        getNumberOfMessages: function (contact: string): Promise<number> {
            throw new Error('Function not implemented.');
        },
        getMessages: function (
            contact: string,
            page: number,
        ): Promise<StorageEnvelopContainer[]> {
            throw new Error('Function not implemented.');
        },
        toggleHideContactAsync: function (
            contact: string,
            value: boolean,
        ): void {
            throw new Error('Function not implemented.');
        },
    };

    return {
        ...defaultValues,
        ...override,
    };
};
