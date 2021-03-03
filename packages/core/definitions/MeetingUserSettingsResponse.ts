import {
  UserMeetingRecordingSetting,
  ScheduleUserMeetingInfo,
  TelephonyUserMeetingSettings,
} from './index';

class MeetingUserSettingsResponse {
  /**
   */
  recording?: UserMeetingRecordingSetting;

  /**
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;

  /**
   */
  telephony?: TelephonyUserMeetingSettings;
}

export default MeetingUserSettingsResponse;
