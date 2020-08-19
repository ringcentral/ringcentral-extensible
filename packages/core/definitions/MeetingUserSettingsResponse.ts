import {UserMeetingRecordingSetting, ScheduleUserMeetingInfo} from './index';

class MeetingUserSettingsResponse {
  /**
   */
  recording?: UserMeetingRecordingSetting;

  /**
   * Settings defining how to schedule user meetings
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;
}

export default MeetingUserSettingsResponse;
