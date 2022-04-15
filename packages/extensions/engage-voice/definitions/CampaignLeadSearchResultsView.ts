import { CampaignLead, DateTime } from './index';

class CampaignLeadSearchResultsView {
  address1?: string;

  address2?: string;

  agentDispostion?: string;

  auxData1?: string;

  auxData2?: string;

  auxData3?: string;

  auxData4?: string;

  auxData5?: string;

  auxExternalUrl?: string;

  auxGreeting?: string;

  auxPhone?: string;

  callerId?: string;

  campaignId?: number;

  campaignLead?: CampaignLead;

  campaignName?: string;

  city?: string;

  dialGroupId?: number;

  dupeKeyOverride?: number;

  email?: string;

  externId?: string;

  extraData?: string;

  firstName?: string;

  gateKeeper?: string;

  lastName?: string;

  lastPassAgentName?: string;

  lastPassDate?: DateTime;

  lastPassDispo?: string;

  lastPassDisposition?: string;

  lastPassDts?: DateTime;

  leadId?: number;

  leadPasses?: number;

  leadPhone?: string;

  leadState?: string;

  leadTimezone?: string;

  listDesc?: string;

  listId?: number;

  liveAnswerMessage?: string;

  loadedDts?: DateTime;

  machAnswerMessage?: string;

  maxPasses?: number;

  midName?: string;

  nextDialTime?: DateTime;

  pendingAgentName?: string;

  sortCol?: string;

  speedToLeadAgentConn?: number;

  speedToLeadFirstPass?: number;

  state?: string;

  stateDts?: DateTime;

  suffix?: string;

  suppressed?: boolean;

  title?: string;

  uploadDate?: DateTime;

  uploadedBy?: string;

  zip?: string;
}

export default CampaignLeadSearchResultsView;
