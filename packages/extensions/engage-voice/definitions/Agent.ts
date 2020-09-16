import {
  CollectionAgentAccountAccess,
  AgentAccountAccess,
  AgentChatGroupAccess,
  CollectionAgentChatQueueAccess,
  CollectionAgentDialGroupMember,
  CollectionAgentGateAccess,
  AgentGateGroupAccess,
  AgentGroup,
  CollectionAgentLoadBalanceMember,
  CollectionAgentSkillProfile,
  DateTime,
  Gate,
  DialGroup,
  AgentSupervisor,
  CollectionAgentSupervisor,
} from './index';

class Agent {
  accountAccess?: CollectionAgentAccountAccess;

  active?: boolean;

  agentAccountAccess?: AgentAccountAccess[];

  agentChatGroupAccess?: AgentChatGroupAccess[];

  agentChatQueueAccesses?: CollectionAgentChatQueueAccess;

  agentDialGroupMembers?: CollectionAgentDialGroupMember;

  agentGateAccess?: CollectionAgentGateAccess;

  agentGateGroupAccess?: AgentGateGroupAccess[];

  agentGroup?: AgentGroup;

  agentId?: number;

  agentLoadBalance?: CollectionAgentLoadBalanceMember;

  agentLoadBalanceMembers?: CollectionAgentLoadBalanceMember;

  agentRank?: number;

  agentSkillProfiles?: CollectionAgentSkillProfile;

  agentType?: string;

  allowAgentReports?: boolean;

  allowAgentStats?: boolean;

  allowAutoAnswer?: boolean;

  allowBlended?: boolean;

  allowCallControl?: boolean;

  allowCampStats?: boolean;

  allowChat?: boolean;

  allowChatStats?: boolean;

  allowChatVoiceConcurrent?: boolean;

  allowCrossGateRequeue?: boolean;

  allowDirectAgentTransfer?: string;

  allowEndcallforeveryone?: boolean;

  allowExternalChat?: boolean;

  allowFromIpAddresses?: string;

  allowGateStats?: boolean;

  allowHangup?: boolean;

  allowHistoricalDialing?: boolean;

  allowHold?: boolean;

  allowInbound?: boolean;

  allowInboundIntlTransfer?: boolean;

  allowLeadInserts?: boolean;

  allowLoginControl?: boolean;

  allowLoginUpdates?: boolean;

  allowManualCalls?: boolean;

  allowManualIntlCalls?: boolean;

  allowManualIntlTransfer?: boolean;

  allowManualOutboundGates?: boolean;

  allowManualPass?: boolean;

  allowOffHook?: boolean;

  allowOutbound?: boolean;

  allowRequeue?: boolean;

  allowSelfAgentStats?: boolean;

  allowTransfer?: boolean;

  altDefaultLoginDest?: string;

  chatQueueAssignments?: number[];

  createdOn?: DateTime;

  defaultAutoAnswerOn?: boolean;

  defaultLoginDest?: string;

  dialGroupAssignments?: number[];

  directAgentExtension?: string;

  disableSupervisorMonitoring?: boolean;

  email?: string;

  enableSoftphone?: boolean;

  externalAgentId?: string;

  firstName?: string;

  gateAssignments?: number[];

  gatesControlAgentVisibility?: boolean;

  ghostRnaAction?: string;

  groupId?: number;

  initLoginBaseState?: string;

  initLoginBaseStateId?: number;

  isActive?: boolean;

  lastLoginDate?: DateTime;

  lastName?: string;

  loadBalanceEnabled?: boolean;

  location?: string;

  manualOutboundDefaultCallerId?: string;

  manualOutboundDefaultGate?: Gate;

  maxChats?: number;

  multiAccountAgent?: boolean;

  parentAgentId?: number;

  password?: string;

  permissions?: string[];

  phoneLoginDialGroup?: DialGroup;

  phoneLoginPin?: string;

  rcUserId?: number;

  showLeadHistory?: boolean;

  sipSafeUsername?: string;

  softphoneId?: number;

  team?: string;

  transientAgent?: boolean;

  transientDelete?: boolean;

  transientDeleteDate?: DateTime;

  userManagedByRC?: boolean;

  username?: string;

  whereSupervisee?: AgentSupervisor[];

  whereSupervisor?: CollectionAgentSupervisor;
}

export default Agent;
