import DataExportTaskContactInfo from './DataExportTaskContactInfo';

/**
 * Information specified in request
*/
interface SpecificInfo {
  /**
   * Starting time for data collection
   * Format: date-time
   */
  timeFrom?: string;

  /**
   * Ending time for data collection
   * Format: date-time
   */
  timeTo?: string;

  /**
   */
  contacts?: DataExportTaskContactInfo[];

  /**
   * List of chats from which the data (posts, files, tasks, events, notes, etc.) will be collected
   */
  chatIds?: string[];
}

export default SpecificInfo;
