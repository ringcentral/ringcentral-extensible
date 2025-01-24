import type TransferExtensionInfo from "./TransferExtensionInfo";

interface TransferInfo {
  /** */
  extension?: TransferExtensionInfo;

  /**
   * Event that initiates transferring to the specified extension
   */
  action?: "HoldTimeExpiration" | "MaxCallers" | "NoAnswer";
}

export default TransferInfo;
