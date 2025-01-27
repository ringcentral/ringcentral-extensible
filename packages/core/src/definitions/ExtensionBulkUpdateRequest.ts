import ExtensionBulkUpdateInfo from "./ExtensionBulkUpdateInfo.js";

/**
 * List of extensions to be updated
 */
interface ExtensionBulkUpdateRequest {
  /**
   * Required
   */
  records?: ExtensionBulkUpdateInfo[];
}

export default ExtensionBulkUpdateRequest;
