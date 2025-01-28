import ExtensionBulkUpdateTaskResultAffectedItems from "./ExtensionBulkUpdateTaskResultAffectedItems";
import ErrorEntity from "./ErrorEntity";

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
