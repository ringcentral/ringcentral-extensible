import {
  AccountAuxState,
  RemoteHttpService,
  CallerIdBucket,
  CollectionCampaignDisposition,
  CollectionCampaignFilterStates,
  CollectionCampaignFilterTimezones,
  CollectionRequeueShortcut,
  ResultFileDestination,
  CampaignUnlimitedFieldGroup,
  CollectionWhitelistTagMembers,
  CustomDialZoneGroups,
  DialGroup,
  DateTime,
  Timestamp,
  QuotaGroup,
  Script,
  Survey,
} from './index';

class Campaign {
  abandonMsg?: string;

  afterCallBaseState?: string;

  afterCallState?: AccountAuxState;

  agentConnectSoapService?: RemoteHttpService;

  agentPopMessage?: string;

  agentTermSoapService?: RemoteHttpService;

  allowLeadInserts?: string;

  allowLeadUpdates?: string;

  appUrl?: string;

  aux1Label?: string;

  aux2Label?: string;

  aux3Label?: string;

  aux4Label?: string;

  aux5Label?: string;

  billingCode?: string;

  callerId?: string;

  callerIdBucket?: CallerIdBucket;

  campaignDesc?: string;

  campaignDispositions?: CollectionCampaignDisposition;

  campaignFilterStates?: CollectionCampaignFilterStates;

  campaignFilterTimezones?: CollectionCampaignFilterTimezones;

  campaignId?: number;

  campaignName?: string;

  campaignPriority?: number;

  campaignRequeueShortcuts?: CollectionRequeueShortcut;

  campaignResultDest?: ResultFileDestination;

  campaignUnlimitedFieldGroup?: CampaignUnlimitedFieldGroup;

  campaignWhitelistTagMembers?: CollectionWhitelistTagMembers;

  countryId?: string;

  customDialZoneGroup?: CustomDialZoneGroups;

  dialGroup?: DialGroup;

  dialLoadedOrder?: number;

  dispositionTimeout?: number;

  dncScrubOption?: string;

  enableGlobalPhoneBook?: boolean;

  endCallMsg?: string;

  endDate?: DateTime;

  exportFlag?: boolean;

  filterEnabled?: string;

  filterType?: string;

  friSched?: string;

  genericKeyValuePairs?: string;

  groupId?: number;

  hangupOnDisposition?: number;

  isActive?: number;

  lastPassDts?: Timestamp;

  liveAnswerMsg?: string;

  machAnswerMsg?: string;

  machineDetect?: boolean;

  maxDailyPasses?: number;

  maxDailyPassesInclude?: string;

  maxDialLimit?: number;

  maxPasses?: number;

  maxPassesExclude?: string;

  maxRingTime?: number;

  maxRingTimeTransfer?: number;

  minPredictiveCallsHistory?: number;

  monSched?: string;

  onHoldMsg?: string;

  passDelayMin?: number;

  pauseRecordingSec?: number;

  permissions?: string[];

  postCallSoapService?: RemoteHttpService;

  postDispSoapService?: RemoteHttpService;

  quotaGroup?: QuotaGroup;

  realtimeDncUrl?: string;

  recordCall?: number;

  recordingInConference?: boolean;

  requeueType?: string;

  rescrubInterval?: number;

  satSched?: string;

  script?: Script;

  scrubDisconnectNoanswer?: string;

  seedAbandonRate?: number;

  seedSuccessRate?: number;

  showLeadInfo?: number;

  showLeadPasses?: boolean;

  showListName?: boolean;

  startDate?: DateTime;

  stopRecordingOnTransfer?: boolean;

  sunSched?: string;

  survey?: Survey;

  surveyPopType?: string;

  targetAbandonRate?: number;

  thuSched?: string;

  trackSpeedToLead?: string;

  transferCallerId?: string;

  transferTermSoapService?: RemoteHttpService;

  tueSched?: string;

  useGlobalWhitelist?: boolean;

  wedSched?: string;

  whisperMsg?: string;
}

export default Campaign;
