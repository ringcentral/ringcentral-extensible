interface UserInMeetingResponse {
  /** */
  enableWaitingRoom?: boolean;

  /** */
  breakoutRoom?: boolean;

  /** */
  chat?: boolean;

  /** */
  polling?: boolean;

  /** */
  annotation?: boolean;

  /** */
  virtualBackground?: boolean;

  /** */
  screenSharing?: boolean;

  /** */
  requestPermissionToUnmute?: boolean;
}

export default UserInMeetingResponse;
