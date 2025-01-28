import ApiErrorWithParameter from "./ApiErrorWithParameter";

/**
 * Standard error response which may include parameterized errors
 */
interface ParameterizedErrorResponseModel {
  /**
   * The array of errors (there will be just one in the most of the cases)
   * Required
   */
  errors?: ApiErrorWithParameter[];
}

export default ParameterizedErrorResponseModel;
