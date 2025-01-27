import CloudRecording from "./CloudRecording.js";
import Paging from "./Paging.js";

/**
 * Recordings page
 */
interface CloudRecordings {
  /**
   * Recordings array
   * Required
   */
  recordings?: CloudRecording[];

  /**
   * Required
   */
  paging?: Paging;
}

export default CloudRecordings;
