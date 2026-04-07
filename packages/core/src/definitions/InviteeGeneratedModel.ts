interface InviteeGeneratedModel {
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

export default InviteeGeneratedModel;
