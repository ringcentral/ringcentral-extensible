import ContactBusinessAddressInfo from './ContactBusinessAddressInfo';

interface AccountBusinessAddressResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   */
  company?: string;

  /**
   */
  email?: string;

  /**
   * Custom site name
   */
  mainSiteName?: string;
}

export default AccountBusinessAddressResource;
