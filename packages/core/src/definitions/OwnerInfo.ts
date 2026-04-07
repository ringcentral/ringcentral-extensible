/**
 * Deprecated. Information on a call owner
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

  /**
   * Internal identifier of an account brandId that monitors a call
   */
  brandId?: string;
}

export default OwnerInfo;
