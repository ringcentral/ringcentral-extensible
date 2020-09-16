import {Agent, DateTime, CampaignRedial} from './index';

class CampaignPass {
  agent?: Agent;

  agentDisposition?: string;

  agentNotes?: string;

  callStart?: DateTime;

  campaignRedials?: CampaignRedial[];

  dialDuration?: number;

  dialType?: boolean;

  duration?: number;

  export?: boolean;

  exportFlag?: boolean;

  leadPhone?: string;

  passDate?: DateTime;

  passDisposition?: string;

  passNumber?: number;

  passUii?: string;
}

export default CampaignPass;
