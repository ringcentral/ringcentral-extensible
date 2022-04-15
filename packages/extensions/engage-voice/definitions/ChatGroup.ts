import { ChatGroupSkill, ChatQueue, DateTime } from './index';

class ChatGroup {
  billingKey?: string;

  chatGroupId?: number;

  chatGroupSkills?: ChatGroupSkill[];

  chatGroups?: ChatQueue[];

  chatQueues?: ChatQueue[];

  createdOn?: DateTime;

  groupName?: string;

  permissions?: string[];
}

export default ChatGroup;
