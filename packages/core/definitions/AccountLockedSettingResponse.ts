import {ScheduleUserMeetingInfo, UserMeetingRecordingSetting} from './index';

class AccountLockedSettingResponse {
  /**
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;

  /**
   */
  recording?: UserMeetingRecordingSetting;
}

export default AccountLockedSettingResponse;
