import type UserMeetingRecordingSetting from "./UserMeetingRecordingSetting";
import type ScheduleUserMeetingInfo from "./ScheduleUserMeetingInfo";
import type TelephonyUserMeetingSettings from "./TelephonyUserMeetingSettings";
import type UserInMeetingResponse from "./UserInMeetingResponse";

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
