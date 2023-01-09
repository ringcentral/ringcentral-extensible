import ErrorBody from './ErrorBody';

interface BadRequest {
  /**
   * List of errors
   */
  errors?: ErrorBody[];
}

export default BadRequest;
