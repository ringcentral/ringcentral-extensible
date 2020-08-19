import {ScheduleUserMeetingInfo, UserMeetingRecordingSetting} from './index';

class AccountLockedSettingResponse {
  /**
   * Scheduling meeting settings locked on account level
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;

  /**
   * Meeting recording settings locked on account level
   */
  recording?: UserMeetingRecordingSetting;
}

export default AccountLockedSettingResponse;
