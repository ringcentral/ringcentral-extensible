import ScheduleMeetingResponse from "./ScheduleMeetingResponse.js";
import AccountLockSettingRecordResponse from "./AccountLockSettingRecordResponse.js";

interface AccountLockedSettingResponse {
  /** */
  scheduleMeeting?: ScheduleMeetingResponse;

  /** */
  recording?: AccountLockSettingRecordResponse;
}

export default AccountLockedSettingResponse;
