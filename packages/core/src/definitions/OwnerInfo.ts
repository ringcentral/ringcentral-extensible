/**
 * Deprecated. Information on call owner
 */
interface OwnerInfo {
  /**
   * Internal identifier of an account that monitors a call
   */
  accountId?: string;

  /**
   * Internal identifier of an extension that monitors a call
   */
  extensionId?: string;
}

export default OwnerInfo;
