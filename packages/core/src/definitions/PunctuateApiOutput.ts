import PunctuateApiResponse from "./PunctuateApiResponse.js";

interface PunctuateApiOutput {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: PunctuateApiResponse;
}

export default PunctuateApiOutput;
