import EveryoneCanControl from "./EveryoneCanControl.js";
import AutoShared from "./AutoShared.js";

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
