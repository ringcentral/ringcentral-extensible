import type EveryoneCanControl from "./EveryoneCanControl";
import type AutoShared from "./AutoShared";

/**
 * Recordings preferences
 */
interface RecordingsPreferences {
  /** */
  everyoneCanControl?: EveryoneCanControl;

  /** */
  autoShared?: AutoShared;
}

export default RecordingsPreferences;
