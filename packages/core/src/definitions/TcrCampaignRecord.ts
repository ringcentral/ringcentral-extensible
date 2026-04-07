import TcrCampaignRecordBrand from "./TcrCampaignRecordBrand.js";
import ApiErrorWithParameter from "./ApiErrorWithParameter.js";

interface TcrCampaignRecord {
  /**
   * Identifier of a TCR campaign
   * Format: int64
   */
  id?: number;

  /**
   * Name of a TCR campaign
   */
  name?: string;

  /**
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
    | "PreventFailed"
    | "Unconfirmed";

  /**
   * Registration time
   * Format: date-time
   */
  registrationTime?: string;

  /**
   * External ID
   */
  externalId?: string;

  /**
   * Brand info
   */
  brand?: TcrCampaignRecordBrand;

  /**
   */
  registrationTier?: "LowVolume" | "StandardVolume";

  /**
   */
  useCases?: (
    | "AccountNotification"
    | "ConversationsInternal"
    | "ConversationsExternal"
    | "CustomerCare"
    | "DeliveryNotification"
    | "FraudAlert"
    | "HigherEducation"
    | "K12Education"
    | "MachineToMachine"
    | "Marketing"
    | "Mixed"
    | "PollingVoting"
    | "PublicServiceAnnouncement"
    | "SecurityAlert"
    | "Unknown"
  )[];

  /**
   */
  errors?: ApiErrorWithParameter[];
}

export default TcrCampaignRecord;
