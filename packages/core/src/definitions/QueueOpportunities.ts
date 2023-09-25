/**
 * Queue opportunities data for the specified grouping
 */
interface QueueOpportunities {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Value for queue opportunities
   * Required
   * Format: double
   */
  values?: number;
}

export default QueueOpportunities;
