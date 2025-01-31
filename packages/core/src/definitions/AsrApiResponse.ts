import AsrApiResponseResponse from "./AsrApiResponseResponse.js";

interface AsrApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: AsrApiResponseResponse;
}

export default AsrApiResponse;
