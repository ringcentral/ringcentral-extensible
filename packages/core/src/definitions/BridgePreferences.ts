import BridgeJoinPreferences from "./BridgeJoinPreferences.js";
import RecordingsPreferences from "./RecordingsPreferences.js";

interface BridgePreferences {
  /** */
  join?: BridgeJoinPreferences;

  /**
   * Specifies enter and exit tones mode.
   *  1) On - Enter and exit tones switched on.
   *  2) Off - Enter and exit tones switched off.
   *  3) ExitOnly - Only exit tones switched on.
   *  4) EnterOnly - Only enter tones switched on.
   * Default: Off
   */
  playTones?: "On" | "Off" | "ExitOnly" | "EnterOnly";

  /**
   * Specifies whether to play music on hold when alone
   * Default: true
   */
  musicOnHold?: boolean;

  /**
   * Specifies if participants can join to a meeting before host.
   *  Default value depends on the bridge type:
   *  - default bridge (PMI) -> false
   *  - other types -> true
   * Example: true
   */
  joinBeforeHost?: boolean;

  /**
   * Specifies if screen sharing is allowed
   * Default: true
   */
  screenSharing?: boolean;

  /**
   * Controls whether recordings are enabled automatically or by user decision
   * Example: User
   */
  recordingsMode?: "Auto" | "ForceAuto" | "User";

  /**
   * Controls whether transcriptions are enabled automatically or by user decision
   * Example: User
   */
  transcriptionsMode?: "Auto" | "ForceAuto" | "User";

  /** */
  recordings?: RecordingsPreferences;

  /**
   * Controls whether participants can start and pause transcription
   * Default: true
   */
  allowEveryoneTranscribeMeetings?: boolean;
}

export default BridgePreferences;
