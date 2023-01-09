/**
 * Query parameters for operation readUserCallLog
*/
interface ReadUserCallLogParameters {
  /**
   * Short extension number of a user. If specified, returns call log for this particular extension only.
 *  Cannot be combined with `phoneNumber` filter
   * Example: 101
   */
  extensionNumber?: string;

  /**
   * Phone number of a caller/callee in e.164 format without a '+' sign. If specified, all incoming/outgoing calls
 *  from/to this phone number are returned.
   * Example: 12053320032
   */
  phoneNumber?: string;

  /**
   * Indicates then calls from/to blocked numbers are returned
   * Default: true
   */
  showBlocked?: boolean;

  /**
   * The direction of call records to be included in the result. If omitted, both
 *  inbound and outbound calls are returned. Multiple values are supported
   */
  direction?: ('Inbound' | 'Outbound')[];

  /**
   * Internal identifier of a call session
   */
  sessionId?: string;

  /**
   * The type of call records to be included in the result.
 *  If omitted, all call types are returned. Multiple values are supported
   */
  type?: ('Voice' | 'Fax')[];

  /**
   * The type of call transport. Multiple values are supported. By default this filter is disabled
   */
  transport?: ('PSTN' | 'VoIP')[];

  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: ('Simple' | 'Detailed');

  /**
   * Deprecated, replaced with `recordingType` filter, still supported for compatibility reasons.
 *  Indicates if only recorded calls should be returned.
 *
 *  If both `withRecording` and `recordingType` parameters are specified, then `withRecording` is ignored'
   */
  withRecording?: boolean;

  /**
   * Indicates that call records with recordings of particular type should be returned.
 *  If omitted, then calls with and without recordings are returned
   */
  recordingType?: ('Automatic' | 'OnDemand' | 'All');

  /**
   * The end of the time range to return call records in ISO 8601 format including timezone,
 *  for example 2016-03-10T18:07:52.534Z. The default value is current time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * The beginning of the time range to return call records in ISO 8601 format including timezone,
 *  for example 2016-03-10T18:07:52.534Z. The default value is `dateTo` minus 24 hours
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * Indicates the page number to retrieve. Only positive number values are allowed
   * Minimum: 1
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates the page size (number of items). The default value is 100.
 *  The maximum value for `Simple` view is 1000, for `Detailed` view - 250
   * Minimum: 1
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Indicates that deleted calls records should be returned
   */
  showDeleted?: boolean;
}

export default ReadUserCallLogParameters;
