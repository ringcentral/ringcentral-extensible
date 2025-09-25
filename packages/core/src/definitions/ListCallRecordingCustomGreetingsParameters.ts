/**
 * Query parameters for operation listCallRecordingCustomGreetings
 */
interface ListCallRecordingCustomGreetingsParameters {
  /**
   * Type of custom greetings to filter results
   */
  type?: "StartRecording" | "StopRecording" | "AutomaticRecording";
}

export default ListCallRecordingCustomGreetingsParameters;
