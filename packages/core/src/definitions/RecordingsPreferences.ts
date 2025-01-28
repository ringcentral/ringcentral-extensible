import EveryoneCanControl from "./EveryoneCanControl";
import AutoShared from "./AutoShared";

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
