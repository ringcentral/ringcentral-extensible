import {Account, CollectionAgent} from './index';

class AgentGroup {
  account?: Account;

  agentGroupId?: number;

  agents?: CollectionAgent;

  groupName?: string;

  isDefault?: boolean;

  permissions?: string[];
}

export default AgentGroup;
