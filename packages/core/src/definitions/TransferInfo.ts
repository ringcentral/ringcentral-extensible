import { TransferExtensionInfo } from './index';

class TransferInfo {
  /**
   */
  extension?: TransferExtensionInfo;

  /**
   * Event that initiates transferring to the specified extension
   */
  action?: ('HoldTimeExpiration' | 'MaxCallers' | 'NoAnswer');
}
export default TransferInfo;
