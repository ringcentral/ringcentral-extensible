/**
 * Transfer extension settings, set/returned if `callHandlingAction` is specified as `TransferToExtension`
 */
interface TransferredExtension {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Canonical URI of an extension resource
   */
  uri?: string;
}

export default TransferredExtension;
