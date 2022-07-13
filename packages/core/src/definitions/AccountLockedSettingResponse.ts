import ScheduleUserMeetingInfo from './ScheduleUserMeetingInfo';
import UserMeetingRecordingSetting from './UserMeetingRecordingSetting';
import TelephonyLockedSettings from './TelephonyLockedSettings';

interface AccountLockedSettingResponse {
  /**
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;

  /**
   */
  recording?: UserMeetingRecordingSetting;

  /**
   */
  telephony?: TelephonyLockedSettings;
}

export default AccountLockedSettingResponse;
