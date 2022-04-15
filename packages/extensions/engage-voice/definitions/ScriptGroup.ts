import { Account, Script } from './index';

class ScriptGroup {
  account?: Account;

  groupId?: number;

  name?: string;

  permissions?: string[];

  scripts?: Script[];
}

export default ScriptGroup;
