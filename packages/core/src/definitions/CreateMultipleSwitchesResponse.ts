import BulkTaskInfo from "./BulkTaskInfo.js";

/**
 * Information on a task for multiple switches creation
 */
interface CreateMultipleSwitchesResponse {
  /** */
  task?: BulkTaskInfo[];
}

export default CreateMultipleSwitchesResponse;
