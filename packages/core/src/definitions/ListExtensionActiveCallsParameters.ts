/**
 * Query parameters for operation listExtensionActiveCalls
 */
interface ListExtensionActiveCallsParameters {
  /**
   * The direction of call records to be included in the result. If omitted, both
   *  inbound and outbound calls are returned. Multiple values are supported
   */
  direction?: ('Inbound' | 'Outbound')[];

  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: 'Simple' | 'Detailed';

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
   * Indicates the page number to retrieve. Only positive number values are allowed
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates the page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;
}

export default ListExtensionActiveCallsParameters;
