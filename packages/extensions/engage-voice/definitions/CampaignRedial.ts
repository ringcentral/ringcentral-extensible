import {DateTime, CampaignLead, CampaignPass} from './index';

class CampaignRedial {
  agentId?: number;

  callBackDate?: DateTime;

  callBackPhone?: string;

  campaignLead?: CampaignLead;

  campaignPass?: CampaignPass;

  id?: number;

  name?: string;

  redialId?: number;
}

export default CampaignRedial;
