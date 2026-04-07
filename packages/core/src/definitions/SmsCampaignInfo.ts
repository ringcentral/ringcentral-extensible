import ApiError from "./ApiError.js";
import ConsentSettings from "./ConsentSettings.js";

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

  /**
   */
  errors?: ApiError[];

  /**
   */
  consentSettings?: ConsentSettings;

  /**
   * Coverage type.
   */
  coverageType?:
    | "PhoneNumber"
    | "Account"
    | "Conversational"
    | "Informational"
    | "Promotional";
}

export default SmsCampaignInfo;
