import {Campaign, CampaignRedial, DateTime, QuotaTarget} from './index';

class CampaignLead {
  address1?: string;

  address2?: string;

  auxData1?: string;

  auxData2?: string;

  auxData3?: string;

  auxData4?: string;

  auxData5?: string;

  auxExternalUrl?: string;

  auxGreeting?: string;

  auxPhone?: string;

  callerId?: string;

  campaign?: Campaign;

  campaignRedials?: CampaignRedial[];

  city?: string;

  dupeKeyOverride?: number;

  email?: string;

  extendedLeadData?: object;

  externId?: string;

  firstName?: string;

  gateKeeper?: string;

  id?: number;

  lastName?: string;

  lastPassDisposition?: string;

  lastPassDts?: DateTime;

  leadId?: number;

  leadPasses?: number;

  leadPhone?: string;

  leadPriority?: number;

  leadState?: string;

  leadTimezone?: string;

  liveAnswerMessage?: string;

  loadedDts?: DateTime;

  machAnswerMessage?: string;

  maxPasses?: number;

  midName?: string;

  name?: string;

  nextDialTime?: DateTime;

  quotaTargetIds?: number[];

  quotaTargets?: QuotaTarget;

  sortCol?: string;

  state?: string;

  stateDts?: DateTime;

  suffix?: string;

  suppressed?: boolean;

  title?: string;

  zip?: string;
}

export default CampaignLead;
