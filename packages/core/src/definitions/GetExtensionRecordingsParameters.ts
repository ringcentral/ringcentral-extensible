/**
 * Query parameters for operation getExtensionRecordings
 */
interface GetExtensionRecordingsParameters {
  /**
   * Token to get the next page
   */
  pageToken?: string;

  /**
   * Number of records returned
   * Format: int32
   */
  perPage?: number;
}

export default GetExtensionRecordingsParameters;
