import type ServerErrorsResponseErrors from "./ServerErrorsResponseErrors.js";

/**
 * Phone Number Parser service's Parse Phone Numbers API 5xx error response schema.
 */
interface ServerErrorsResponse {
  /**
   * Required
   */
  errors?: ServerErrorsResponseErrors[];
}

export default ServerErrorsResponse;
