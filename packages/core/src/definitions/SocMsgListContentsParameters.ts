/**
 * Query parameters for operation socMsgListContents
 */
interface SocMsgListContentsParameters {
  /**
   * Filter based on the specified intervention identifiers.
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  intervention?: string[];

  /**
   * Filter based on the specified identity identifiers.
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  identity?: string[];

  /**
   * Filter based on the specified identity group identifiers.
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  identityGroup?: string[];

  /**
   * Filter based on the specified channel identifiers.
   * Example: 7f946431b6eebffafae642cc
   */
  source?: string[];

  /**
   * Filter based on the specified thread identifiers.
   * Example: 7f946431b6eebffafae642cc
   */
  thread?: string[];

  /**
   * Filter based on the specified text(s). Provided multiple times, the values are ANDed.
   */
  text?: string[];

  /**
   * Filter for specified status.
   */
  status?: ('New' | 'Assigned' | 'Replied' | 'UserReply' | 'UserInitiated' | 'Ignored')[];

  /**
   * Ordering by creationTime is descending by default.
   * Example: +creationTime
   * Default: -creationTime
   */
  orderBy?: '-creationTime' | '+creationTime' | 'creationTime';

  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;
}

export default SocMsgListContentsParameters;
