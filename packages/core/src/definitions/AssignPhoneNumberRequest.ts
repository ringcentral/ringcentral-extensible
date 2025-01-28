import AssignPhoneNumberRequestExtension from "./AssignPhoneNumberRequestExtension";
import ContactCenterProvider from "./ContactCenterProvider";

interface AssignPhoneNumberRequest {
  /**
   * Type of a phone number
   */
  type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";

  /**
   * Target usage type of phone number (only listed values are supported)
   * Required
   */
  usageType?:
    | "MainCompanyNumber"
    | "CompanyNumber"
    | "DirectNumber"
    | "ContactCenterNumber";

  /** */
  extension?: AssignPhoneNumberRequestExtension;

  /** */
  costCenterId?: string;

  /** */
  contactCenterProvider?: ContactCenterProvider;
}

export default AssignPhoneNumberRequest;
