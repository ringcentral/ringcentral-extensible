import {
  CollectionAgentSkillProfile,
  ChatRequeueShortcut,
  DateTime,
} from './index';

class ChatGroupSkill {
  active?: boolean;

  agentSkillProfiles?: CollectionAgentSkillProfile;

  chatRequeueShortcuts?: ChatRequeueShortcut[];

  createdOn?: DateTime;

  permissions?: string[];

  skillDesc?: string;

  skillId?: number;

  skillName?: string;
}

export default ChatGroupSkill;
