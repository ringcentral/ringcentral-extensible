import MissedCallExtensionInfoExternalNumber from "./MissedCallExtensionInfoExternalNumber.js";

/**
 * Specifies an extension (a calling group) which should be used for the missed call transfer. Returned only if the `actionType` is set to 'ConnectToExtension'
 */
interface MissedCallExtensionInfo {
  /**
   * Internal identifier of an extension which should be used for the missed call transfer
   */
  id?: string;

  /** */
  externalNumber?: MissedCallExtensionInfoExternalNumber;
}

export default MissedCallExtensionInfo;
