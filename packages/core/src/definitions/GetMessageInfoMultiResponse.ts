import MessageBody from './MessageBody';

class GetMessageInfoMultiResponse {
  /**
   * Internal identifier of a resource
   */
  resourceId?: string;

  /**
   * Status code of resource retrieval
   */
  status?: number;

  /**
   */
  body?: MessageBody;
}

export default GetMessageInfoMultiResponse;
