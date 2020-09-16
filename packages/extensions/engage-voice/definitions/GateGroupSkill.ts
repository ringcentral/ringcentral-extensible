import {CollectionAgentSkillProfile, DateTime, RequeueShortcut} from './index';

class GateGroupSkill {
  active?: boolean;

  agentSkillProfiles?: CollectionAgentSkillProfile;

  createdOn?: DateTime;

  requeueShortcut?: RequeueShortcut[];

  skillDesc?: string;

  skillId?: number;

  skillName?: string;

  whisperAudio?: string;
}

export default GateGroupSkill;
