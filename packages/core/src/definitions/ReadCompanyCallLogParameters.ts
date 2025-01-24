/**
 * Query parameters for operation readCompanyCallLog
 */
interface ReadCompanyCallLogParameters {
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
   * The direction of call records to be included in the result. If omitted, both
   *  inbound and outbound calls are returned. Multiple values are supported
   */
  direction?: ("Inbound" | "Outbound")[];

  /**
   * The type of call records to be included in the result.
   *  If omitted, all call types are returned. Multiple values are supported
   */
  type?: ("Voice" | "Fax")[];

  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: "Simple" | "Detailed";

  /**
   * Deprecated, replaced with `recordingType` filter, still supported for compatibility reasons.
   *  Indicates if only recorded calls should be returned.
   *
   *  If both `withRecording` and `recordingType` parameters are specified, then `withRecording` is ignored
   */
  withRecording?: boolean;

  /**
   * Indicates that call records with recordings of particular type should be returned.
   *  If omitted, then calls with and without recordings are returned
   */
  recordingType?: "Automatic" | "OnDemand" | "All";

  /**
   * The beginning of the time range to return call records in ISO 8601 format including timezone,
   *  for example 2016-03-10T18:07:52.534Z. The default value is `dateTo` minus 24 hours
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * The end of the time range to return call records in ISO 8601 format including timezone,
   *  for example 2016-03-10T18:07:52.534Z. The default value is current time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * Internal identifier of a call session
   */
  sessionId?: string;

  /**
   * Internal identifier of a telephony session
   */
  telephonySessionId?: string;

  /**
   * Indicates the page number to retrieve. Only positive number values are accepted
   * Minimum: 1
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates the page size (number of items)
   * Minimum: 1
   * Format: int32
   * Default: 100
   */
  perPage?: number;
}

export default ReadCompanyCallLogParameters;
