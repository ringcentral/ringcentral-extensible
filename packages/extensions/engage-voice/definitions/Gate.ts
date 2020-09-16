import {
  Campaign,
  AccountAuxState,
  RemoteHttpService,
  AgentGateAccess,
  DateTime,
  GateGroup,
  GatePriorityGroup,
  GateQueueEvent,
  ResultFileDestination,
  Script,
  Survey,
} from './index';

class Gate {
  abandonCampaign?: Campaign;

  acceptTime?: string;

  afterCallBaseState?: string;

  afterCallState?: AccountAuxState;

  agentConnSoapService?: RemoteHttpService;

  agentGateAccess?: AgentGateAccess[];

  agentPopMessage?: string;

  agentTermSoapService?: RemoteHttpService;

  appUrl?: string;

  backupAppUrl?: string;

  billingCode?: string;

  blockedAniMessage?: string;

  callbackCampaign?: Campaign;

  createdOn?: DateTime;

  dequeueDelay?: number;

  dequeueSoapService?: RemoteHttpService;

  dispositionTimeout?: number;

  enableGlobalPhoneBook?: boolean;

  enableIvrTokens?: boolean;

  endCallMessage?: string;

  fifoDisabled?: boolean;

  friSched?: string;

  gateClosedEvent?: string;

  gateDesc?: string;

  gateGroup?: GateGroup;

  gateId?: number;

  gateName?: string;

  gateOpen?: boolean;

  gatePriority?: number;

  gatePriorityGroup?: GatePriorityGroup;

  gateQueueEvents?: GateQueueEvent[];

  hangupOnDisposition?: boolean;

  isActive?: boolean;

  longCallTime?: number;

  manualCallerId?: string;

  maxQueueEvent?: string;

  maxQueueLimit?: number;

  monSched?: string;

  noAgentEvent?: string;

  observeDst?: boolean;

  onHoldMessage?: string;

  outboundCallerId?: string;

  pauseRecordingSec?: number;

  permissions?: string[];

  postCallSoapService?: RemoteHttpService;

  postDispSoapService?: RemoteHttpService;

  recordCall?: number;

  recordingInConference?: boolean;

  requeueType?: string;

  resultFileDestination?: ResultFileDestination;

  revMatch?: boolean;

  satSched?: string;

  script?: Script;

  shortAbandonTime?: number;

  shortCallTime?: number;

  slaTime?: number;

  specialAniEvent?: string;

  stopRecordingOnTransfer?: boolean;

  sunSched?: string;

  survey?: Survey;

  surveyPopType?: string;

  syncQueueWait?: number;

  throttleCalls?: number;

  throttleDays?: number;

  throttlingAniEvent?: string;

  thuSched?: string;

  transferCallerId?: string;

  transferTermSoapService?: RemoteHttpService;

  ttAccept?: boolean;

  tueSched?: string;

  wedSched?: string;

  whisperMessage?: string;

  wrapTime?: number;
}

export default Gate;
