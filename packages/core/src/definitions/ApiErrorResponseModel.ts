import ApiError from './ApiError';

/**
 * Standard error response model which is returned in case of any unsuccessful operation
*/
interface ApiErrorResponseModel {
  /**
   * The array of errors (there will be just one in the most of cases)
   * Required
   */
  errors?: ApiError[];
}

export default ApiErrorResponseModel;
