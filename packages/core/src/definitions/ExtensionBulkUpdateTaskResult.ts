import ExtensionUpdateShortResult from './ExtensionUpdateShortResult';
import ErrorEntity from './ErrorEntity';

/**
 * Result record on multiple extension update task
*/
interface ExtensionBulkUpdateTaskResult {
  /**
   */
  affectedItems?: ExtensionUpdateShortResult[];

  /**
   */
  errors?: ErrorEntity[];
}

export default ExtensionBulkUpdateTaskResult;
