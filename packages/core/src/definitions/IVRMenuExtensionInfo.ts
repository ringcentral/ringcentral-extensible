/**
 * For 'Connect' or 'Voicemail' actions only. Extension reference
 */
interface IvrMenuExtensionInfo {
  /**
   * Link to an extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Name of an extension
   */
  name?: string;

  /**
   * Extension number
   */
  pin?: string;
}

export default IvrMenuExtensionInfo;
