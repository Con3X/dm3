import { addConversation } from './postgres/addConversation';
import { addMessageBatch } from './postgres/addMessageBatch';
import { editMessageBatch } from './postgres/editMessageBatch';
import { getConversationList } from './postgres/getConversationList';
import { getMessages } from './postgres/getMessages';
import { getNumberOfConversations } from './postgres/getNumberOfConversations';
import { getNumberOfMessages } from './postgres/getNumberOfMessages';
import { toggleHideConversation } from './postgres/toggleHideConversation';
import { MessageRecord } from './postgres/utils/MessageRecord';

export default {
    addConversation,
    addMessageBatch,
    editMessageBatch,
    getConversationList,
    getMessages,
    getNumberOfConversations,
    getNumberOfMessages,
    toggleHideConversation,
};

export type { MessageRecord };
