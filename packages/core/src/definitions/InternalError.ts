import ErrorBody from './ErrorBody';

interface InternalError {
  /**
   * List of errors
   */
  errors?: ErrorBody[];
}

export default InternalError;
