import AdgPhoneNumberResource from "./AdgPhoneNumberResource.js";

interface AccountResource {
  /**
   * Example: My lovely company
   */
  companyName?: string;

  /**
   * Example: Lovely Holding
   */
  federatedName?: string;

  /**
   * Required
   * Example: 400131426008
   */
  id?: string;

  /** */
  mainNumber?: AdgPhoneNumberResource;
}

export default AccountResource;
