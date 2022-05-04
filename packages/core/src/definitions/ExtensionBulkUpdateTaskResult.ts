import ExtensionUpdateShortResult from './ExtensionUpdateShortResult';
import ErrorEntity from './ErrorEntity';

/**
 * Result record on multiple extension update task
*/
class ExtensionBulkUpdateTaskResult {
  /**
   */
  affectedItems?: ExtensionUpdateShortResult[];

  /**
   */
  errors?: ErrorEntity[];
}

export default ExtensionBulkUpdateTaskResult;
