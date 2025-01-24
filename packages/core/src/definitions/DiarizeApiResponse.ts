import type DiarizeApiResponseResponse from "./DiarizeApiResponseResponse";

interface DiarizeApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: DiarizeApiResponseResponse;
}

export default DiarizeApiResponse;
