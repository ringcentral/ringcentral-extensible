/**
 * Timezone information
 */
interface TimezoneInfoBase {
  /**
   * Canonical URI of a timezone
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a timezone
   */
  id?: string;

  /**
   * Short name of a timezone
   */
  name?: string;

  /**
   * Meaningful description of the timezone
   */
  description?: string;

  /**
   * Time difference (offset) in minutes from Coordinated Universal Time (UTC)
   *  that a specific locale follows
   */
  bias?: string;
}

export default TimezoneInfoBase;
