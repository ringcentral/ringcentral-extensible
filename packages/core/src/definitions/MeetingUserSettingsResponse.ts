import UserMeetingRecordingSetting from "./UserMeetingRecordingSetting";
import ScheduleUserMeetingInfo from "./ScheduleUserMeetingInfo";
import TelephonyUserMeetingSettings from "./TelephonyUserMeetingSettings";
import UserInMeetingResponse from "./UserInMeetingResponse";

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
