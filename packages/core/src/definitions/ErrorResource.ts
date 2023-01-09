import ResponseErrorModel from './ResponseErrorModel';

/**
 * Standard error resource which is returned in case of any unsuccessful operation
*/
interface ErrorResource {
  /**
   * The array of errors (there will be just one in the most of cases)
   * Required
   */
  errors?: ResponseErrorModel[];
}

export default ErrorResource;
