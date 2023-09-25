import type EmotionSegment from './EmotionSegment';

interface EmotionApiResponse {
  /**
   */
  status?: 'Success' | 'Fail';

  /**
   */
  response?: EmotionSegment[];
}

export default EmotionApiResponse;
