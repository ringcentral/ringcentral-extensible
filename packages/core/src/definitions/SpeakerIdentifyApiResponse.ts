import SpeakerIdentifyApiResponseResponse from './SpeakerIdentifyApiResponseResponse';

interface SpeakerIdentifyApiResponse {
  /**
   */
  status?: ('Success' | 'Fail');

  /**
   */
  response?: SpeakerIdentifyApiResponseResponse;
}

export default SpeakerIdentifyApiResponse;
