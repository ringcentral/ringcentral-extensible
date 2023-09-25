/**
 * Query parameters for operation readCompanyCallRecord
 */
interface ReadCompanyCallRecordParameters {
  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: 'Simple' | 'Detailed';
}

export default ReadCompanyCallRecordParameters;
