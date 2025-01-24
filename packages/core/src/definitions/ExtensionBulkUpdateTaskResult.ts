import type ExtensionBulkUpdateTaskResultAffectedItems from "./ExtensionBulkUpdateTaskResultAffectedItems";
import type ErrorEntity from "./ErrorEntity";

/**
 * Resulting record of a task on multiple extensions update
 */
interface ExtensionBulkUpdateTaskResult {
  /** */
  affectedItems?: ExtensionBulkUpdateTaskResultAffectedItems;

  /** */
  errors?: ErrorEntity[];
}

export default ExtensionBulkUpdateTaskResult;
