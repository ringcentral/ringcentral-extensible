import ExtensionBulkUpdateInfo from './ExtensionBulkUpdateInfo';

/**
 * List of extensions to be updated
*/
class ExtensionBulkUpdateRequest {
  /**
   * Required
   */
  records?: ExtensionBulkUpdateInfo[];
}

export default ExtensionBulkUpdateRequest;
