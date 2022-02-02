import React, { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { addContact, ApiConnection } from './lib/Web3Provider';
import { addContact as addContactApi } from './external-apis/BackendAPI';
import { resolveName } from './external-apis/InjectedWeb3API';

interface AddContactFormProps {
    apiConnection: ApiConnection;
    requestContacts: (apiConnection: ApiConnection) => Promise<void>;
}

function AddContactForm(props: AddContactFormProps) {
    const [accountToAdd, setAccountToAdd] = useState('');
    const [errorIndication, setErrorIndication] = useState<boolean>(false);

    const onInput = (event: React.FormEvent<HTMLInputElement>) => {
        setAccountToAdd((event.target as any).value);
        setErrorIndication(false);
    };

    const add = async () => {
        try {
            await addContact(
                props.apiConnection,
                accountToAdd,
                resolveName,
                addContactApi,
            );
            await props.requestContacts(props.apiConnection);
            setAccountToAdd('');
        } catch (e) {
            setErrorIndication(true);
        }
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Address or ENS name"
                aria-label="Address or ENS name"
                value={accountToAdd}
                onInput={onInput}
            />
            <button
                className={`btn btn-${
                    errorIndication ? 'danger' : 'outline-secondary '
                }`}
                type="button"
                onClick={add}
            >
                Add
            </button>
        </div>
    );
}

export default AddContactForm;
