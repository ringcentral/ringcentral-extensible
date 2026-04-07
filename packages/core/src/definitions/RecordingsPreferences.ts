import type EveryoneCanControl from "./EveryoneCanControl.js";
import type AutoShared from "./AutoShared.js";

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
