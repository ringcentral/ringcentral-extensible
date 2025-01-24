import type ADGError from "./ADGError";

/**
 * Format of response in case that any error occurred during request processing
 */
interface ADGErrorResponse {
  /**
   * Collection of all gathered errors
   */
  errors?: ADGError[];
}

export default ADGErrorResponse;
