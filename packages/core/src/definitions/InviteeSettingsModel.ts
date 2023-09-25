interface InviteeSettingsModel {
  /**
   * The type of the webinar invitee
   * Default: User
   */
  type?: 'User' | 'Room';

  /**
   * Indicates if invite/cancellation emails have to be sent to this invitee.
   *  For "Host" it cannot be set to false.
   *  If it is true it can't be changed back to false.
   * Default: true
   */
  sendInvite?: boolean;
}

export default InviteeSettingsModel;
