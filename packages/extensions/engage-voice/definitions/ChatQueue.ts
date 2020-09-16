import {
  Account,
  RemoteHttpService,
  Campaign,
  ChatGroup,
  ChatPriorityGroup,
  Blob,
  DateTime,
  ChatQueueAnip,
  ChatRequeueShortcutGroupChatQueueAccess,
  Script,
} from './index';

class ChatQueue {
  account?: Account;

  accountId?: string;

  active?: boolean;

  agentConnectHttpService?: RemoteHttpService;

  agentConnectMsg?: string;

  agentFrom?: string;

  agentMaxAcceptTime?: number;

  agentTermHttpService?: RemoteHttpService;

  agentWrapTime?: number;

  appUrl?: string;

  callbackCampaign?: Campaign;

  chatGroup?: ChatGroup;

  chatPriorityGroup?: ChatPriorityGroup;

  chatQueueDescription?: string;

  chatQueueId?: number;

  chatQueueName?: string;

  chatQueueOpen?: boolean;

  clientFrom?: string;

  companyLogo?: Blob;

  createdOn?: DateTime;

  dequeueHttpService?: RemoteHttpService;

  dispTimeout?: number;

  friSched?: string;

  gateQueueAnips?: ChatQueueAnip[];

  groupId?: number;

  idleTimeout?: number;

  isActive?: boolean;

  longChatTime?: number;

  maxQueueEvent?: string;

  maxQueueLimit?: number;

  monSched?: string;

  newChatHttpService?: RemoteHttpService;

  noAgentEvent?: string;

  observeDst?: boolean;

  permissions?: string[];

  postChatHttpService?: RemoteHttpService;

  postDispHttpService?: RemoteHttpService;

  queuePriority?: number;

  requeueShortcutAccess?: ChatRequeueShortcutGroupChatQueueAccess[];

  requeueType?: string;

  requireCaptcha?: boolean;

  satSched?: string;

  script?: Script;

  shortChatTime?: number;

  slaTime?: number;

  smsQueueClosedEvent?: string;

  specialIpEvent?: string;

  sunSched?: string;

  surveyId?: number;

  surveyPopType?: string;

  throttleCalls?: number;

  throttleDays?: number;

  throttleIpEvent?: string;

  thuSched?: string;

  tueSched?: string;

  wedSched?: string;
}

export default ChatQueue;
