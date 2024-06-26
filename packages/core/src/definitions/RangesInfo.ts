interface RangesInfo {
  /**
   * Beginning timestamp of the range in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601),
   *  for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*
   * Format: date-time
   */
  from?: string;

  /**
   * Ending timestamp of the range in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601),
   *  for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*
   * Format: date-time
   */
  to?: string;
}

export default RangesInfo;
