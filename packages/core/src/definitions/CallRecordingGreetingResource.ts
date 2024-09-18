interface CallRecordingGreetingResource {
  /**
   */
  type?: 'StartRecording' | 'StopRecording' | 'AutomaticRecording';

  /**
   * Here `Default` indicates that all greetings of that type
   *  (in all languages) are default. If at least one greeting (in any language)
   *  of the specified type is custom, then `Custom` is returned.
   */
  mode?: 'Default' | 'Custom';
}

export default CallRecordingGreetingResource;
