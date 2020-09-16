import {BaseAgentState} from './index';

class AccountAuxState {
  agentAuxState?: string;

  baseAgentState?: BaseAgentState;

  description?: string;

  isActive?: boolean;

  isAgentSelectable?: boolean;

  isRequired?: boolean;

  rank?: number;

  stateId?: number;
}

export default AccountAuxState;
