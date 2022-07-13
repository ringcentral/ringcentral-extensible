import CallHandlingExtensionInfo from './CallHandlingExtensionInfo';

/**
 * Transfer settings applied for department (call queue) extension type, returned if CallHandlingAction is set to `TransferToExtension`
*/
interface TransferredExtensionInfo {
  /**
   */
  extension?: CallHandlingExtensionInfo;
}

export default TransferredExtensionInfo;
