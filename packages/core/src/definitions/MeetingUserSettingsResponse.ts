import UserMeetingRecordingSetting from './UserMeetingRecordingSetting';
import ScheduleUserMeetingInfo from './ScheduleUserMeetingInfo';
import TelephonyUserMeetingSettings from './TelephonyUserMeetingSettings';

interface MeetingUserSettingsResponse {
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
