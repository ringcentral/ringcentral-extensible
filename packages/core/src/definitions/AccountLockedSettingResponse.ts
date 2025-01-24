import type ScheduleMeetingResponse from "./ScheduleMeetingResponse";
import type AccountLockSettingRecordResponse from "./AccountLockSettingRecordResponse";

interface AccountLockedSettingResponse {
  /** */
  scheduleMeeting?: ScheduleMeetingResponse;

  /** */
  recording?: AccountLockSettingRecordResponse;
}

export default AccountLockedSettingResponse;
