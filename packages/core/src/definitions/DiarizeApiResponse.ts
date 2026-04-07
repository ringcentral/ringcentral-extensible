import type DiarizeApiResponseResponse from "./DiarizeApiResponseResponse.js";

interface DiarizeApiResponse {
  /**
   */
  status?: "Success" | "Fail";

  /**
   */
  response?: DiarizeApiResponseResponse;
}

export default DiarizeApiResponse;
