/**
 * Data for all calls
 */
interface AllCalls {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Value for all calls
   * Required
   * Format: double
   */
  values?: number;
}

export default AllCalls;
