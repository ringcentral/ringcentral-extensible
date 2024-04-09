/**
 * Query parameters for operation socMsgListIdentities
 */
interface SocMsgListIdentitiesParameters {
  /**
   * Filter based on the specified sourceId.
   */
  sourceId?: string;

  /**
   * Filter based on the specified identityGroupIds (separated by commas).
   */
  identityGroupIds?: string[];

  /**
   * Filter based on the specified userId.
   */
  userId?: string;

  /**
   * Filter based on the specified uuid.
   */
  uuid?: string;

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

export default SocMsgListIdentitiesParameters;
