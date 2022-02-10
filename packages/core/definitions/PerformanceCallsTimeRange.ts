/**
 * Date-time range for the calls aggregated. A call is considered to be in the time range if it started within the time frame specified. Both borders are inclusive.
 */
class PerformanceCallsTimeRange {
  /**
   * The start date-time for resulting records in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format including timezone, for example 2016-03-15T18:07:52.534Z.
   * Required
   * Format: date-time
   */
  timeFrom?: string;

  /**
   * The end date-time for resulting records in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format including timezone, for example 2016-03-15T18:07:52.534Z.
   * Required
   * Format: date-time
   */
  timeTo?: string;
}
export default PerformanceCallsTimeRange;
