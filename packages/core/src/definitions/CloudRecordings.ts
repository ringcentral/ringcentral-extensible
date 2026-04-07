import CloudRecording from "./CloudRecording.js";
import BasicPaging from "./BasicPaging.js";

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
