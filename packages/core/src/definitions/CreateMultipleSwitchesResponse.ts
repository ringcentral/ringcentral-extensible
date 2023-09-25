import type BulkTaskInfo from './BulkTaskInfo';

/**
 * Information on a task for multiple switches creation
 */
interface CreateMultipleSwitchesResponse {
  /**
   */
  task?: BulkTaskInfo[];
}

export default CreateMultipleSwitchesResponse;
