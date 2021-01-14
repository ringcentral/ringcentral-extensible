import {UserMeetingRecordingSetting, ScheduleUserMeetingInfo} from './index';

class MeetingUserSettingsResponse {
  /**
   */
  recording?: UserMeetingRecordingSetting;

  /**
   */
  scheduleMeeting?: ScheduleUserMeetingInfo;
}

export default MeetingUserSettingsResponse;
