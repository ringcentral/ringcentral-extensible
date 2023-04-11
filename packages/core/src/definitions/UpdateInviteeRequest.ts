/**
 * The attribute declaration to indicate webinar session participant/invitee role
*/
interface UpdateInviteeRequest {
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
}

export default UpdateInviteeRequest;
