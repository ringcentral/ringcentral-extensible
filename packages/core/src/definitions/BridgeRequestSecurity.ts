interface BridgeRequestSecurity {
  /**
   * Specifies if a meeting is password protected.
 *
 *  By default, Instant and Scheduled bridges are not password protected. For default (PMI) bridge, password
 *  protection will be turned on and the password will be generated if it is not specified while creation.
 *
 *  While creation to set password protection you should set this field to true and specify a password in the
 *  **password** field. If you want to change password or set password protection for an unprotected bridge,
 *  you should set this field to true and specify a password in the **password** field in the update operation.
 *
 *  To make protected bridge as unprotected you should set this field to false in the update operation.
   * Example: true
   */
  passwordProtected?: boolean;

  /**
   * Specifies a password if bridge meetings should be password protected (passwordProtected field is true).
 *  Besides that, if the field is specified in the request but **passwordProtected** field is missing then
 *  it means that **passwordProtected** field is set to true.
   * Example: Wq123ygs15
   */
  password?: string;

  /**
   * If true, only authenticated users can join to a meeting.
   */
  noGuests?: boolean;

  /**
   * If true, only users have the same account can join to a meeting.
   */
  sameAccount?: boolean;

  /**
   * If true, end to end encryption will be enabled for a meeting.
   */
  e2ee?: boolean;
}

export default BridgeRequestSecurity;
