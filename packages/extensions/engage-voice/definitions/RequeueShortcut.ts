import {
  Campaign, Gate, GateGroupSkill, GateGroup,
} from './index';

class RequeueShortcut {
  campaign?: Campaign;

  gate?: Gate;

  groupSkill?: GateGroupSkill;

  name?: string;

  rank?: number;

  requeueGate?: Gate;

  requeueGateGroup?: GateGroup;

  requeueShortcutId?: number;
}

export default RequeueShortcut;
