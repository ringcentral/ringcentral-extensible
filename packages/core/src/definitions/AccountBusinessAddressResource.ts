import type ContactBusinessAddressInfo from './ContactBusinessAddressInfo';

interface AccountBusinessAddressResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   * Company business name
   */
  company?: string;

  /**
   * Company business email address
   * Format: email
   */
  email?: string;

  /**
   * Custom site name
   */
  mainSiteName?: string;
}

export default AccountBusinessAddressResource;
