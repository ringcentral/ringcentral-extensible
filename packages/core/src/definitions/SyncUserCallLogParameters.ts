/**
 * Query parameters for operation syncUserCallLog
 */
interface SyncUserCallLogParameters {
  /**
   * Type of call log synchronization request: full or incremental sync
   * Default: FSync
   */
  syncType?: 'FSync' | 'ISync';

  /**
   * A `syncToken` value from the previous sync response (for `ISync` mode only, mandatory)
   */
  syncToken?: string;

  /**
   * Starting date for the resulting records in ISO 8601 format, including
   *  timezone, for example *2016-03-10T18:07:52.534Z*. The range is limited to the last 30 days from the current moment.
   *  If not specified, the default value is a log history date (date of account creation/call log deletion), and
   *  no time range limitation applied
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * For `FSync` mode this parameter is mandatory, it limits the number of records to be returned in response.
   *
   *  For `ISync` mode this parameter specifies the number of records to extend the sync frame with to the past
   *  (the maximum number of records is 250)
   * Format: int32
   */
  recordCount?: number;

  /**
   * Type of calls to be returned
   */
  statusGroup?: ('Missed' | 'All')[];

  /**
   * Defines the level of details for returned call records
   * Default: Simple
   */
  view?: 'Simple' | 'Detailed';

  /**
   * Supported for `ISync` mode. Indicates that deleted call records should be returned
   */
  showDeleted?: boolean;

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
  recordingType?: 'Automatic' | 'OnDemand' | 'All';
}

export default SyncUserCallLogParameters;
