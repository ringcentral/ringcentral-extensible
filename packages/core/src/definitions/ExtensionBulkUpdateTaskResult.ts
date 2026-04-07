import type ExtensionBulkUpdateTaskResultAffectedItems from "./ExtensionBulkUpdateTaskResultAffectedItems.js";
import type ErrorEntity from "./ErrorEntity.js";

/**
 * Resulting record of a task on multiple extensions update
 */
interface ExtensionBulkUpdateTaskResult {
  /**
   */
  affectedItems?: ExtensionBulkUpdateTaskResultAffectedItems;

  /**
   */
  errors?: ErrorEntity[];
}

export default ExtensionBulkUpdateTaskResult;
