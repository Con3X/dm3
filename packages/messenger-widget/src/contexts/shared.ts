import { StorageLocation } from 'dm3-lib-storage';
import {
    AccountInfo,
    ConnectionState,
    GlobalState,
    SelectedRightView,
} from '../utils/enum-type-utils';

export const initialState: GlobalState = {
    connection: {
        connectionState: ConnectionState.CollectingSignInData,
        storageLocation: StorageLocation.dm3Storage,
        defaultServiceUrl: process.env.REACT_APP_BACKEND as string,
    },
    accounts: {
        contacts: undefined,
        selectedContact: undefined,
        accountInfoView: AccountInfo.None,
    },
    cache: {
        abis: new Map<string, string>(),
        avatarUrls: new Map<string, string>(),
    },
    userDb: undefined,
    uiState: {
        showAddContact: false,
        selectedRightView: SelectedRightView.Chat,
        maxLeftView: true,
        show: false,
        lastMessagePull: 0,
        proflieExists: false,
        browserStorageBackup: false,
    },
    auth: {
        currentSession: undefined,
        recentlyUsedSession: undefined,
        allSessions: {},
    },
};