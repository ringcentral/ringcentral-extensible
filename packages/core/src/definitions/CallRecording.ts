interface CallRecording {
  /**
   * Internal identifier of a call recording
   */
  id?: string;

  /**
   * Call recording status
   */
  active?: boolean;

  /**
   * Recording mode
   */
  mode?: "Automatic" | "OnDemand";

  /**
   * Recording view
   */
  view?: "Party" | "Session";
}

export default CallRecording;
