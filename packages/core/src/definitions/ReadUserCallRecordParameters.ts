/**
 * Query parameters for operation readUserCallRecord
*/
interface ReadUserCallRecordParameters {
  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: ('Simple' | 'Detailed');
}

export default ReadUserCallRecordParameters;
