class MeetingExternalUserInfoResource {
  /**
   */
  uri?: string;

  /**
   */
  userId?: string;

  /**
   */
  accountId?: string;

  /**
   */
  userType?: number;

  /**
   */
  userToken?: string;

  /**
   */
  hostKey?: string;

  /**
   */
  personalMeetingId?: string;

  /**
   * Link to the user's personal meeting room, used as an alias for personal meeting URL (with personal meeting ID)
   */
  personalLink?: string;

  /**
   * Enables using personal meeting ID for instant meetings
   */
  usePmiForInstantMeetings?: boolean;
}

export default MeetingExternalUserInfoResource;
