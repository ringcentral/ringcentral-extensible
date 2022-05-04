import ScheduleUserMeetingInfo from './ScheduleUserMeetingInfo';
import UserMeetingRecordingSetting from './UserMeetingRecordingSetting';
import TelephonyLockedSettings from './TelephonyLockedSettings';

class AccountLockedSettingResponse {
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
