import type ErrorEntity from "./ErrorEntity.js";
import type ExtensionBulkUpdateTaskResultAffectedItems from "./ExtensionBulkUpdateTaskResultAffectedItems.js";

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
