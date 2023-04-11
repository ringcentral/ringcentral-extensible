/**
 * Query parameters for operation caiEnrollmentsList
*/
interface CaiEnrollmentsListParameters {
  /**
   * Indicates if partially enrolled speakers should be returned
   */
  partial?: boolean;

  /**
   * Number of enrollments to be returned per page
   * Format: int32
   */
  perPage?: number;

  /**
   * Page number to be returned
   * Format: int32
   */
  page?: number;
}

export default CaiEnrollmentsListParameters;
