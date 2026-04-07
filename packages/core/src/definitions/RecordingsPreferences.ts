import type AutoShared from "./AutoShared.js";
import type EveryoneCanControl from "./EveryoneCanControl.js";

/**
 * Recordings preferences
 */
interface RecordingsPreferences {
  /**
   */
  everyoneCanControl?: EveryoneCanControl;

  /**
   */
  autoShared?: AutoShared;
}

export default RecordingsPreferences;
