import SummaryApiResponse from "./SummaryApiResponse.js";

interface SummaryApiOutput {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: SummaryApiResponse;
}

export default SummaryApiOutput;
