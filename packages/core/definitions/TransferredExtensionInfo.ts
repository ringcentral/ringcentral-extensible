import { CallHandlingExtensionInfo } from './index';

/**
 * Transfer settings applied for department (call queue) extension type, returned if CallHandlingAction is set to `TransferToExtension`
 */
class TransferredExtensionInfo {
  /**
   */
  extension?: CallHandlingExtensionInfo;
}
export default TransferredExtensionInfo;
