import type CallsByTypeBreakdown from './CallsByTypeBreakdown';

/**
 * Data for calls with breakdown by type (Direct, FromQueue, ParkRetrieval, Transferred, Outbound, Overflow)
 */
interface CallsByType {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByTypeBreakdown;
}

export default CallsByType;
