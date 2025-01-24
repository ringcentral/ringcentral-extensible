import type BusinessAddressInfo from "./BusinessAddressInfo";

interface ModifyAccountBusinessAddressRequest {
  /**
   * Company business name
   */
  company?: string;

  /**
   * Company business email address
   * Format: email
   */
  email?: string;

  /** */
  businessAddress?: BusinessAddressInfo;

  /**
   * Custom site name
   */
  mainSiteName?: string;
}

export default ModifyAccountBusinessAddressRequest;
