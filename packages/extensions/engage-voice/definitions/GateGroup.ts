import {DateTime, Gate, GateGroupSkill} from './index';

class GateGroup {
  billingKey?: string;

  createdOn?: DateTime;

  endDate?: DateTime;

  gateGroupId?: number;

  gates?: Gate[];

  groupName?: string;

  groupSkills?: GateGroupSkill[];

  permissions?: string[];

  startDate?: DateTime;
}

export default GateGroup;
