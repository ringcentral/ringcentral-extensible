import type ClientErrorsResponseErrors from "./ClientErrorsResponseErrors.js";

/**
 * Phone Number Parser service's Parse Phone Numbers API 4xx error response schema.
 */
interface ClientErrorsResponse {
  /**
   * Required
   */
  errors?: ClientErrorsResponseErrors[];
}

export default ClientErrorsResponse;
