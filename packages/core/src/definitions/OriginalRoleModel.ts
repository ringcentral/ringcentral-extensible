/**
 * Role assigned to participant when invite was sent or during join time (if an invite was not sent)
 */
interface OriginalRoleModel {
  /**
   * The role of the webinar session participant/invitee.
   *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  originalRole?: 'Panelist' | 'CoHost' | 'Host' | 'Attendee';
}

export default OriginalRoleModel;
