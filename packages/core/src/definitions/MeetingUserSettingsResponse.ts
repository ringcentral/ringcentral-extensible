import UserMeetingRecordingSetting from "./UserMeetingRecordingSetting.js";
import ScheduleUserMeetingInfo from "./ScheduleUserMeetingInfo.js";
import TelephonyUserMeetingSettings from "./TelephonyUserMeetingSettings.js";
import UserInMeetingResponse from "./UserInMeetingResponse.js";

interface MeetingUserSettingsResponse {
  /** */
  recording?: UserMeetingRecordingSetting;

  /** */
  scheduleMeeting?: ScheduleUserMeetingInfo;

  /** */
  telephony?: TelephonyUserMeetingSettings;

  /** */
  inMeetings?: UserInMeetingResponse;
}

export default MeetingUserSettingsResponse;
