import {DelegateExtensionInfo, ConferencingSettingsInfo} from './index';

class DelegateInfo {
  /**
   */
  extension?: DelegateExtensionInfo;

  /**
   * Specifies whether secretary user is permitted to pickup calls on behalf of boss user role
   */
  callPickup?: boolean;

  /**
   * Specifies whether secretary user is permitted to organize conference on behalf of boss user role
   */
  conferencing?: boolean;

  /**
   */
  conferencingSettings?: ConferencingSettingsInfo;

  /**
   * List of the delegate users for the current boss user
   */
  delegateIds?: string[];
}

export default DelegateInfo;
