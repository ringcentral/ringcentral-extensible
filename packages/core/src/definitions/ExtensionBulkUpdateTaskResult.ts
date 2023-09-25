import type ExtensionUpdateShortResult from './ExtensionUpdateShortResult';
import type ErrorEntity from './ErrorEntity';

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
