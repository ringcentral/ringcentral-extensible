interface FaxRequestTo {
  /**
   * Phone number in E.164 (with '+' sign) format
   * Example: +18661234567
   */
  phoneNumber?: string;

  /**
   * Name of a fax recipient that will be listed on a fax cover page
   */
  name?: string;
}

export default FaxRequestTo;
