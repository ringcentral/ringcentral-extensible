import { ChatGroupSkill, ChatGroup, ChatQueue } from './index';

class ChatRequeueShortcut {
  chatGroupSkill?: ChatGroupSkill;

  chatRequeueShortcutId?: number;

  name?: string;

  rank?: number;

  requeueGroup?: ChatGroup;

  requeueQueue?: ChatQueue;
}

export default ChatRequeueShortcut;
