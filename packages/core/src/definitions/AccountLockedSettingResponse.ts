import ScheduleMeetingResponse from "./ScheduleMeetingResponse";
import AccountLockSettingRecordResponse from "./AccountLockSettingRecordResponse";

interface AccountLockedSettingResponse {
  /** */
  scheduleMeeting?: ScheduleMeetingResponse;

  /** */
  recording?: AccountLockSettingRecordResponse;
}

export default AccountLockedSettingResponse;
