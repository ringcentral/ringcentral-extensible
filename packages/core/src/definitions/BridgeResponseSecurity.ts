import BridgeResponseSecurityPassword from './BridgeResponseSecurityPassword';

interface BridgeResponseSecurity {
  /**
   * Specifies if a meeting is password protected.
   */
  passwordProtected?: boolean;

  /**
   */
  password?: BridgeResponseSecurityPassword;

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

export default BridgeResponseSecurity;
