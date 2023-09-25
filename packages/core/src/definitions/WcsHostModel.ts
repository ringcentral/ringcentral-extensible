import type RcwDomainUserModel from './RcwDomainUserModel';

/**
 * The internal IDs of RC-authenticated users.
 */
interface WcsHostModel {
  /**
   * Describes host's license, 'true' - license is active
   * Required
   */
  entitled?: boolean;

  /**
   * User ID
   * Required
   */
  userId?: string;

  /**
   * Account ID
   * Required
   */
  accountId?: string;

  /**
   */
  linkedUser?: RcwDomainUserModel;
}

export default WcsHostModel;
