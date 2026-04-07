import type BasicPaging from "./BasicPaging.js";
import type CloudRecording from "./CloudRecording.js";

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
  paging?: BasicPaging;
}

export default CloudRecordings;
