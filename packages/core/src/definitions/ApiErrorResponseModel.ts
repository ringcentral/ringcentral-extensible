import type ApiError from "./ApiError";

/**
 * Standard error response model which is returned in case of any unsuccessful operation
 */
interface ApiErrorResponseModel {
  /**
   * The array of errors (there will be just one in the most of the cases)
   * Required
   */
  errors?: ApiError[];
}

export default ApiErrorResponseModel;
