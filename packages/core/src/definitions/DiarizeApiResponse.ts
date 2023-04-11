import DiarizeApiResponseResponse from './DiarizeApiResponseResponse';

interface DiarizeApiResponse {
  /**
   */
  status?: ('Success' | 'Fail');

  /**
   */
  response?: DiarizeApiResponseResponse;
}

export default DiarizeApiResponse;
