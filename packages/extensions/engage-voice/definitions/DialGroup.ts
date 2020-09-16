import {AgentDialGroupMember, Campaign} from './index';

class DialGroup {
  agentDialGroupMembers?: AgentDialGroupMember[];

  agentsReady?: number;

  allowLeadSearch?: string;

  allowPreviewLeadFilters?: boolean;

  billingKey?: string;

  campaigns?: Campaign[];

  dialGroupDesc?: string;

  dialGroupId?: number;

  dialGroupName?: string;

  dialMode?: string;

  enableAbsolutePriority?: boolean;

  enableAgentFilter?: boolean;

  enableCallbacksAfterMaxDailyPass?: boolean;

  enableCallbacksAfterMaxpass?: boolean;

  enableListPriority?: boolean;

  groupId?: number;

  hciEnabled?: string;

  isActive?: boolean;

  maxLeadsReturned?: number;

  maxPorts?: number;

  minPredictiveAgents?: number;

  outdialServerGroupId?: number;

  permissions?: string[];

  progressiveCallDelay?: number;

  progressiveEnabled?: boolean;

  realTimeAgentData?: boolean;

  requireFetchedLeadsCalled?: boolean;
}

export default DialGroup;
