import type ExtensionBulkUpdateInfo from './ExtensionBulkUpdateInfo';

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
