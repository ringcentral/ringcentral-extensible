import UserMeetingRecordingSetting from './UserMeetingRecordingSetting';
import ScheduleUserMeetingInfo from './ScheduleUserMeetingInfo';
import TelephonyUserMeetingSettings from './TelephonyUserMeetingSettings';

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
