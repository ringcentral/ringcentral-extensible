import ErrorBody from './ErrorBody';

interface Unauthorized {
  /**
   * List of errors
   */
  errors?: ErrorBody[];
}

export default Unauthorized;
