import type RcwDomainUserModel from "./RcwDomainUserModel";

/**
 * The internal IDs of RC-authenticated users.
 */
interface InviteeModel {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * First (given) name
   * Example: John
   */
  firstName?: string;

  /**
   * Last (family) name
   * Example: Doe
   */
  lastName?: string;

  /**
   * The role of the webinar session participant/invitee.
   *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  role?: "Panelist" | "CoHost" | "Host" | "Attendee";

  /**
   * The role of the webinar session participant/invitee.
   *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  originalRole?: "Panelist" | "CoHost" | "Host" | "Attendee";

  /** */
  linkedUser?: RcwDomainUserModel;

  /**
   * A token to access avatar image from CDN. Available only for authenticated panelists
   * Example: wedyugwied8wud98u90i329silqdjalidj
   */
  avatarToken?: string;

  /**
   * The type of the participant specified in invite or determined at join time
   * Required
   * Default: User
   */
  type?: "User" | "Room";

  /**
   * User's contact email
   * Format: email
   * Example: john.doe@example.com
   */
  email?: string;

  /**
   * Boolean to indicate if the participant was blocked from Q&A
   * Example: true
   */
  qnaBlocked?: boolean;

  /**
   * Indicates if invite/cancellation emails was sent to this invitee.
   * Required
   * Example: true
   */
  sendInvite?: boolean;

  /**
   * Indicates that this invitee joined the session
   * Required
   * Example: true
   */
  joined?: boolean;
}

export default InviteeModel;
