interface CallRecordingGreetingResource {
  /**
   */
  type?: "StartRecording" | "StopRecording" | "AutomaticRecording";

  /**
   * Greeting prompt mode for the given `type`. When at least one custom greeting
   *  exists for this type (in any language), the literal value `Custom` is returned.
   *  Otherwise the localized display name of the system default prompt is returned
   *  (for example `Default` in English or `Par défaut` in French), based on the
   *  request locale.
   * Example: Default
   */
  mode?: string;
}

export default CallRecordingGreetingResource;
