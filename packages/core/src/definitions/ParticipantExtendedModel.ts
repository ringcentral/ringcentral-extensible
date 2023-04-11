import RcwDomainUserModel from './RcwDomainUserModel';

/**
 * The internal IDs of RC-authenticated users.
*/
interface ParticipantExtendedModel {
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
  role?: ('Panelist' | 'CoHost' | 'Host' | 'Attendee');

  /**
   * The role of the webinar session participant/invitee.
 *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  originalRole?: ('Panelist' | 'CoHost' | 'Host' | 'Attendee');

  /**
   */
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
  type?: ('User' | 'Room');

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
   * The time (earliest) when this participant joined the session
   * Format: date-time
   */
  joinTime?: string;

  /**
   * The time (latest) when this participant left the session
   * Format: date-time
   */
  leaveTime?: string;

  /**
   * Indicates if this participant was ejected from the webinar
   */
  wasEjected?: boolean;

  /**
   * For invited participants - Invitee ID (matches Configuration API Invitee IDs)
   */
  inviteeId?: string;

  /**
   * Registrant ID
   * Example: 12345678
   */
  registrantId?: string;

  /**
   * The hash string which is unique for each unique user
   * Example: qzR4wNbddziRil7i033ELlb3KXrJDsw8mOyj970J+so=
   */
  uniqueUserHash?: string;
}

export default ParticipantExtendedModel;
