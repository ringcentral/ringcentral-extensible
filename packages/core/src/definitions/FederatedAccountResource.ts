import AdgPhoneNumberResource from "./AdgPhoneNumberResource.js";

interface FederatedAccountResource {
  /** */
  companyName?: string;

  /**
   * Format: int32
   */
  conflictCount?: number;

  /** */
  federatedName?: string;

  /**
   * Required
   */
  id?: string;

  /**
   * Format: date-time
   */
  linkCreationTime?: string;

  /** */
  mainNumber?: AdgPhoneNumberResource;
}

export default FederatedAccountResource;
