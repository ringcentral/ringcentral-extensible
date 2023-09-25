/**
 * The attribute declaration to indicate webinar session participant/invitee role
 */
interface RcwRoleAttributeModel {
  /**
   * The role of the webinar session participant/invitee.
   *  See also: [Understanding Webinar Roles](https://support.ringcentral.com/webinar/getting-started/understanding-ringcentral-webinar-roles.html)
   * Required
   * Example: Panelist
   */
  role?: 'Panelist' | 'CoHost' | 'Host' | 'Attendee';
}

export default RcwRoleAttributeModel;
