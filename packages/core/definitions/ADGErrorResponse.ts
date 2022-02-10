import {ADGError} from './index';

/**
 * Format of response in case that any error occurred during request processing
 */
class ADGErrorResponse {
  /**
   * Collection of all gathered errors
   */
  errors?: ADGError[];
}
export default ADGErrorResponse;
