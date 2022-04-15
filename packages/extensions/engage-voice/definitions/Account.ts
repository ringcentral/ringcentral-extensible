import { DateTime, MainAccount } from './index';

class Account {
  accountId?: string;

  accountName?: string;

  archivedAccount?: boolean;

  audioRetentionDays?: number;

  concurrentLogins?: number;

  crmHost?: string;

  crmInstance?: string;

  crmPwd?: string;

  crmUid?: string;

  dataRetentionDays?: number;

  databaseShardId?: string;

  defaultCallerid?: string;

  defaultHold?: string;

  defaultIntellidialServerId?: number;

  defaultOutdialServerGroupId?: number;

  dncOrgId?: string;

  dncOrgIdConfirmed?: boolean;

  emailFromAddress?: string;

  enable247Dialing?: boolean;

  enableAgentRankRouting?: boolean;

  enableBlankCallerid?: boolean;

  enableCallEventTracking?: boolean;

  enableCellScrubbing?: boolean;

  enableCentralizedData?: boolean;

  enableChat?: boolean;

  enableCloudRouting?: boolean;

  enableCorporateDirectory?: boolean;

  enableCrmExport?: boolean;

  enableFifo?: boolean;

  enableFolderMode?: boolean;

  enableGoodData?: boolean;

  enableHciDialer?: boolean;

  enableInbound?: boolean;

  enableIntlOutbound?: boolean;

  enableListLoading?: boolean;

  enableMultiuser?: boolean;

  enableOutbound?: boolean;

  enableOutboundPredictive?: boolean;

  enableScheduledTasks?: boolean;

  enableSoftphones?: boolean;

  enableTaskMode?: boolean;

  enableTcpaSafeMachineDetect?: boolean;

  enableTracking?: boolean;

  enableVisualIvr?: boolean;

  enableVoiceBroadcast?: boolean;

  endDate?: DateTime;

  ftpHost?: string;

  ftpPwd?: string;

  ftpUid?: string;

  ivrAppsEnabled?: boolean;

  mainAccount?: MainAccount;

  mainAccountId?: string;

  mainAccountName?: string;

  maxBreakTime?: number;

  maxLunchTime?: number;

  maxOutPortsPerAgent?: number;

  minimumSec?: number;

  notificationEmail?: string;

  offHookHold?: string;

  offHookWhisper?: string;

  offHookWhisperGhost?: string;

  offhookCallerid?: string;

  outboundManualDefaultRingtime?: number;

  outboundPrepay?: boolean;

  overrideDispositions?: number;

  pciCompliance?: boolean;

  pciComplianceRequest?: boolean;

  phoneRecordingPin?: number;

  primaryTimezone?: number;

  rcAccountAccess?: string;

  recordingAccessMode?: string;

  recordingFilenameFormat?: string;

  recordingsDelivery?: string;

  rounding?: number;

  securityKey?: string;

  softphoneHost?: string;

  softphoneWsdl?: string;

  startDate?: DateTime;

  tcpaSafeMode?: boolean;

  usePowerBy?: boolean;

  weekOffset?: number;

  wfmType?: string;
}

export default Account;
