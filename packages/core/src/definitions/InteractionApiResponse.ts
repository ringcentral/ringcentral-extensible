import type InteractionApiResponseResponse from './InteractionApiResponseResponse';

interface InteractionApiResponse {
  /**
   */
  status?: 'Success' | 'Fail';

  /**
   */
  response?: InteractionApiResponseResponse;
}

export default InteractionApiResponse;
