import TcrCampaignRecord from "./TcrCampaignRecord.js";

interface CampaignListResponse {
  /**
   * Required
   */
  records?: TcrCampaignRecord[];
}

export default CampaignListResponse;
