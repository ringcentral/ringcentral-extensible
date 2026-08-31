import type AdgPhoneNumberResource from "./AdgPhoneNumberResource.js";

interface FederatedAccountResource {
  /**
   */
  companyName?: string;

  /**
   * Format: int32
   */
  conflictCount?: number;

  /**
   */
  federatedName?: string;

  /**
   * Required
   */
  id?: string;

  /**
   * Format: date-time
   */
  linkCreationTime?: string;

  /**
   */
  mainNumber?: AdgPhoneNumberResource;

  /**
   * Indicates whether Contact Center is enabled for the account.
   */
  contactCenterEnabled?: boolean;
}

export default FederatedAccountResource;
