import type CloudRecording from "./CloudRecording";
import type Paging from "./Paging";

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
