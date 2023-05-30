import { ProfileKeys } from 'dm3-lib-profile';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { GlobalContext } from './GlobalContext';

export type AuthContextType = {
    profileKeys: ProfileKeys;
    ensName: string;
    token: string;
    initialized: boolean;
};

export const AuthContext = React.createContext<AuthContextType>({
    profileKeys: {} as ProfileKeys,
    ensName: '',
    token: '',
    initialized: false,
});

export const AuthContextProvider = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const { clientProps, web3Provider } = React.useContext(GlobalContext);
    const { getWallet } = useAuth(web3Provider, clientProps);

    const [initialized, setInitialized] = useState(false);
    const [initializing, setInitializing] = useState(false);

    const [profileKeys, setprofileKeys] = useState<ProfileKeys>(
        {} as ProfileKeys,
    );
    const [ensName, setEnsName] = useState<string>('');
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        const init = async () => {
            //If the user is not signed in with SIWE, we're using the view only mode
            if (
                !clientProps.siweAddress ||
                !clientProps.siweMessage ||
                !clientProps.siweSig
            ) {
                return;
            }
            setInitializing(true);
            const { keys, ensName, token } = await getWallet();
            setInitialized(true);
            setprofileKeys(keys);
            setEnsName(ensName);
            setToken(token);
            setInitializing(false);
        };

        if (initializing || initialized) {
            return;
        }

        init();
    }, [
        clientProps.siweAddress,
        clientProps.siweMessage,
        clientProps.siweSig,
        getWallet,
        initialized,
        initializing,
    ]);

    return (
        <AuthContext.Provider
            value={{ profileKeys, ensName, initialized, token }}
        >
            {children}
        </AuthContext.Provider>
    );
};
