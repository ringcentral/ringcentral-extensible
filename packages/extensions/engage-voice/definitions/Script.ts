import { Account, DateTime, ScriptGroup } from './index';

class Script {
  account?: Account;

  created?: DateTime;

  description?: string;

  groupId?: number;

  isActive?: boolean;

  name?: string;

  permissions?: string[];

  scriptGroup?: ScriptGroup;

  scriptId?: number;

  updated?: DateTime;
}

export default Script;
