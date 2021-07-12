import {ExtensionBulkUpdateInfo} from './index';

// List of extensions to be updated
class ExtensionBulkUpdateRequest {
  /**
   * Required
   */
  records?: ExtensionBulkUpdateInfo[];
}
export default ExtensionBulkUpdateRequest;
