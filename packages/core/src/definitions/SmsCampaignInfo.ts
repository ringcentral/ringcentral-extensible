import ApiError from "./ApiError.js";

interface SmsCampaignInfo {
  /**
   * Identifier of the associated TCR campaign
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

  /**
   * Use case of the associated TCR campaign
   */
  registrationTier?: string;

  /**
   * List of sub use cases of the associated TCR campaign
   */
  useCases?: string[];

  /** */
  errors?: ApiError[];
}

export default SmsCampaignInfo;
