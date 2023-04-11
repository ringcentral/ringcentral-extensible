interface RcwDomainUserModel {
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
   * Identity domain
   * Required
   * Default: pbx
   */
  domain?: ('pbx' | 'ilm');
}

export default RcwDomainUserModel;
