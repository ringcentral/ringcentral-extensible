interface DetailedCallInfo {
  /** */
  callId?: string;

  /** */
  toTag?: string;

  /** */
  fromTag?: string;

  /**
   * Format: uri
   */
  remoteUri?: string;

  /**
   * Format: uri
   */
  localUri?: string;

  /** */
  rcSessionId?: string;
}

export default DetailedCallInfo;
