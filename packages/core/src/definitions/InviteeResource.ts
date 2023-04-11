import RcwDomainUserModel from './RcwDomainUserModel';

/**
 * The attribute declaration to indicate webinar session participant/invitee role
*/
interface InviteeResource {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * Object creation time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Object last modification time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

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
   * User's contact email
   * Format: email
   * Example: john.doe@example.com
   */
  email?: string;

  /**
   * Job title
   * Example: Product Manager
   */
  jobTitle?: string;

  /**
   */
  linkedUser?: RcwDomainUserModel;

  /**
   * The role of the webinar session participant/invitee.
 *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  role?: ('Panelist' | 'CoHost' | 'Host' | 'Attendee');

  /**
   * The type of the webinar invitee
   * Default: User
   */
  type?: ('User' | 'Room');

  /**
   * Indicates if invite/cancellation emails have to be sent to this invitee.
 *  For "Host" it cannot be set to false.
 *  If it is true it can't be changed back to false.
   * Default: true
   */
  sendInvite?: boolean;

  /**
   * Personalized join link for the Invitee
   * Format: uri
   * Example: https://v.ringcentral.com/w/join/de7yd8ew7yfsdfjh899843rgj
   */
  joinUri?: string;

  /**
   * Phone (PSTN) participant code
   */
  phoneParticipantCode?: string;
}

export default InviteeResource;
