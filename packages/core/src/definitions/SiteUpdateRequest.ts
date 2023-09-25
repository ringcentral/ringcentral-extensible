import type ContactBusinessAddressInfo from './ContactBusinessAddressInfo';
import type RegionalSettings from './RegionalSettings';
import type OperatorInfo from './OperatorInfo';

interface SiteUpdateRequest {
  /**
   * Extension user first name
   * Required
   */
  name?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   * Custom name of a caller. Max number of characters is 15 (only
   *  alphabetical symbols, numbers and commas are supported)
   */
  callerIdName?: string;

  /**
   * Site extension contact email
   * Format: email
   */
  email?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   */
  regionalSettings?: RegionalSettings;

  /**
   */
  operator?: OperatorInfo;
}

export default SiteUpdateRequest;
