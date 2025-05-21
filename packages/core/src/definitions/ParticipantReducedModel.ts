import RcwDomainUserModel from "./RcwDomainUserModel.js";

/**
 * The internal IDs of RC-authenticated users.
 */
interface ParticipantReducedModel {
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
   * A token to access avatar image from CDN. Available only for authenticated panel members and attendees
   * Example: wedyugwied8wud98u90i329silqdjalidj
   */
  avatarToken?: string;

  /**
   * The type of the participant specified in invite or determined at join time
   * Required
   * Default: User
   */
  type?: "User" | "Room";
}

export default ParticipantReducedModel;
