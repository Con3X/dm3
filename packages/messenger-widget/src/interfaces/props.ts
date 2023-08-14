import { Actions, GlobalState } from '../utils/enum-type-utils';
import { Dm3Props } from './config';
import { ContactPreview } from './utils';

export interface DashboardProps {
    getContacts: (
        state: GlobalState,
        dispatch: React.Dispatch<Actions>,
        props: Dm3Props,
    ) => Promise<void>;
    dm3Props: Dm3Props;
}

export interface EnsDetails {
    propertyKey: string;
    propertyValue: string;
}

export interface ContactMenu {
    contactDetails: ContactPreview;
    closeContactMenu: Function;
}