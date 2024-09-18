/**
 * Query parameters for operation listSocialMessagingIdentities
 */
interface ListSocialMessagingIdentitiesParameters {
  /**
   * Filter based on the specified channelId.
   */
  channelId?: string;

  /**
   * Filter based on the specified `identityGroupIds` (separated by commas)
   */
  identityGroupIds?: string[];

  /**
   * Either Agent or Customer
   */
  identityType?: 'Agent' | 'Customer';

  /**
   * Filter based on the specified `userId`
   */
  userId?: string;

  /**
   * Filter based on the specified `uuid`
   */
  uuid?: string;

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

export default ListSocialMessagingIdentitiesParameters;
