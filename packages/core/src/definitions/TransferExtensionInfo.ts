/**
 * Transfer extension settings, set/returned if `callHandlingAction` is specified as `TransferToExtension`
 */
interface TransferExtensionInfo {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Canonical URI of an extension resource
   */
  uri?: string;

  /**
   * Extension name
   */
  name?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;
}

export default TransferExtensionInfo;
