import {ChatQueue} from './index';

class ChatPriorityGroup {
  chatPriorityGroupId?: number;

  chatQueues?: ChatQueue[];

  priorityGroupName?: string;
}

export default ChatPriorityGroup;
