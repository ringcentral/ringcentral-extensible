import InteractionApiResponseResponse from "./InteractionApiResponseResponse.js";

interface InteractionApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: InteractionApiResponseResponse;
}

export default InteractionApiResponse;
