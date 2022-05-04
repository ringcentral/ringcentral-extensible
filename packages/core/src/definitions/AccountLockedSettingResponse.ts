import { ScheduleUserMeetingInfo, UserMeetingRecordingSetting, TelephonyLockedSettings } from './index';

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
