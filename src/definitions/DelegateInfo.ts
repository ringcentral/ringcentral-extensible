import {DelegateExtensionInfo} from '.';

class DelegateInfo {
  /**
   */
  extension?: DelegateExtensionInfo;

  /**
   * Specifies whether Secretary is permitted to pickup calls on behalf of Boss
   */
  callPickup?: boolean;

  /**
   * Specifies whether Secretary is permitted to organize conference on behalf of Boss
   */
  conferencing?: boolean;
}

export default DelegateInfo;
