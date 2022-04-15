import { GetMessageInfoResponse, SyncInfoMessages } from './index';

class GetMessageSyncResponse {
  /**
   * Link to the message sync resource
   */
  uri?: string;

  /**
   * List of message records with synchronization information
   * Required
   */
  records?: GetMessageInfoResponse[];

  /**
   * Required
   */
  syncInfo?: SyncInfoMessages;
}
export default GetMessageSyncResponse;
