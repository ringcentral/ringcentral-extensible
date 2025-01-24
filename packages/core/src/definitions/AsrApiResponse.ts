import type AsrApiResponseResponse from "./AsrApiResponseResponse";

interface AsrApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: AsrApiResponseResponse;
}

export default AsrApiResponse;
