interface AccountTimezoneInfoRequest {
  /**
   * Internal identifier of a timezone
   * Required
   */
  id?: string;

  /**
   * Short name of a timezone
   * Required
   */
  name?: string;
}

export default AccountTimezoneInfoRequest;
