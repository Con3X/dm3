import './SendMessage.css';
import { useContext } from 'react';
import sendBtnIcon from '../../assets/images/send-btn.svg';
import { AuthContext } from '../../context/AuthContext';
import { ConversationContext } from '../../context/ConversationContext';
import { MessageContext } from '../../context/MessageContext';
import { MessageDataProps } from '../../interfaces/props';
import { GlobalContext } from '../../utils/context-utils';
import { scrollToBottomOfChat } from '../Chat/scrollToBottomOfChat';
import { onSubmitMessage } from './onSubmitMessage';
import { UiViewContext } from '../../context/UiViewContext';

export function SendMessage(props: MessageDataProps) {
    const { account, profileKeys } = useContext(AuthContext);
    const { addMessage } = useContext(MessageContext);
    const { selectedContact } = useContext(ConversationContext);
    const { dispatch } = useContext(GlobalContext);
    const { messageView, setMessageView } = useContext(UiViewContext);

    async function submit() {
        await onSubmitMessage(
            messageView,
            setMessageView,
            dispatch,
            addMessage,
            props,
            profileKeys,
            account!,
            selectedContact!,
        );
        scrollToBottomOfChat();
    }

    return (
        <span className="msg-send-btn align-items-center pointer-cursor text-secondary-color">
            <img
                className="chat-svg-icon"
                src={sendBtnIcon}
                alt="send"
                onClick={submit}
            />
        </span>
    );
}
