/**
 * Query parameters for operation listSocialMessagingContents
 */
interface ListSocialMessagingContentsParameters {
  /**
   * Filter based on the specified intervention identifiers
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  interventionIds?: string[];

  /**
   * Filter based on the specified identity identifiers
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  authorIdentityIds?: string[];

  /**
   * Filter based on the specified identity group identifiers
   * Example: 7f946431b6eebffafae642cc,re946431b6eebffafae642cc
   */
  authorIdentityGroupIds?: string[];

  /**
   * Filter based on the specified channel identifiers
   * Example: 7f946431b6eebffafae642cc
   */
  channelIds?: string[];

  /**
   * Direction of the content.
   *
   *  * Incoming contents are received from a channel.
   *  * Outgoing contents are exported to a channel.
   * Example: Incoming
   */
  contentDirection?: 'Incoming' | 'Outgoing';

  /**
   * Filter based on the specified thread identifiers
   * Example: 7f946431b6eebffafae642cc
   */
  threadIds?: string[];

  /**
   * Filter based on the specified text(s). Provided multiple times, the values are ANDed
   */
  text?: string[];

  /**
   * Filter for specified status
   */
  status?: ('New' | 'Assigned' | 'Replied' | 'UserReply' | 'UserInitiated' | 'Ignored')[];

  /**
   * Ordering by creationTime and lastModifiedTime is descending by default.
   * Example: +creationTime
   * Default: -creationTime
   */
  orderBy?:
    | '-creationTime'
    | '+creationTime'
    | 'creationTime'
    | '-lastModifiedTime'
    | '+lastModifiedTime'
    | 'lastModifiedTime';

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

export default ListSocialMessagingContentsParameters;
