import ApiError from "./ApiError.js";

interface SmsBrandInfo {
  /**
   * Identifier of the associated TCR brand
   */
  id?: string;

  /**
   * Status of the associated TCR campaign
   */
  status?:
    | "Created"
    | "Submitted"
    | "Confirmed"
    | "SubmitFailed"
    | "UpdateRequested"
    | "DeleteRequested"
    | "CampaignSuspended"
    | "CampaignExpired"
    | "Draft"
    | "PreVetFailed"
    | "Unconfirmed";

  /** */
  errors?: ApiError[];
}

export default SmsBrandInfo;
