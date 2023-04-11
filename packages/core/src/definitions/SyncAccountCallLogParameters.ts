/**
 * Query parameters for operation syncAccountCallLog
*/
interface SyncAccountCallLogParameters {
  /**
   * Type of call log synchronization request: full or incremental sync
   * Default: FSync
   */
  syncType?: ('FSync' | 'ISync');

  /**
   * Value of syncToken property of last sync request response. Mandatory parameter for 'ISync' sync type
   */
  syncToken?: string;

  /**
   * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * For 'FSync' the parameter is mandatory, it limits the number of records to be returned in response. For 'ISync' it specifies with how many records to extend sync frame to the past, the maximum number of records is 250
   * Minimum: 1
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
  view?: ('Simple' | 'Detailed');

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
  recordingType?: ('Automatic' | 'OnDemand' | 'All');
}

export default SyncAccountCallLogParameters;
