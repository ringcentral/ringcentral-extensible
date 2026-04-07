/**
 * Query parameters for operation listCompanyActiveCalls
*/
interface ListCompanyActiveCallsParameters {
    /**
   * The direction of call records to be included in the result. If omitted, both
 *  inbound and outbound calls are returned. Multiple values are supported
   */
  direction?: ('Inbound' | 'Outbound')[];

  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: ('Simple' | 'Detailed');

  /**
   * The type of call records to be included in the result.
 *  If omitted, all call types are returned. Multiple values are supported
   */
  type?: ('Voice' | 'Fax')[];

  /**
   * The type of call transport. Multiple values are supported. By default, this filter is disabled
   */
  transport?: ('PSTN' | 'VoIP')[];

  /**
   * Conference call type: RCC or RC Meetings. If not specified, no conference call filter applied
   */
  conferenceType?: ('AudioConferencing' | 'Meetings')[];

  /**
   * The number of items per page. Accepts a positive integer (1–1000) or
 *  the special value `"max"` which returns up to 1000 records.
 *  If the provided integer value exceeds 1000, the maximum value of 1000 is applied.
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Indicates the page number to retrieve. Only positive number values are accepted
   * Minimum: 1
   * Format: int32
   * Default: 1
   */
  page?: number;
}

export default ListCompanyActiveCallsParameters;
