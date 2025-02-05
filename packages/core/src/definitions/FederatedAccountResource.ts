import PhoneNumberResource from "./PhoneNumberResource.js";

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
  mainNumber?: PhoneNumberResource;
}

export default FederatedAccountResource;
