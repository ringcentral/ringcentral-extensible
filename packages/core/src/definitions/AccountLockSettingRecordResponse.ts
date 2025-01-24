interface AccountLockSettingRecordResponse {
  /** */
  localRecording?: boolean;

  /** */
  cloudRecording?: boolean;

  /** */
  autoRecording?: boolean;

  /** */
  cloudRecordingDownload?: boolean;

  /** */
  hostDeleteCloudRecording?: boolean;

  /** */
  accountUserAccessRecording?: boolean;

  /** */
  autoDeleteCmr?: boolean;
}

export default AccountLockSettingRecordResponse;
