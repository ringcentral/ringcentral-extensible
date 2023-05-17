import MessageStatusesResponse from '../../../../../definitions/MessageStatusesResponse';
import AggregateA2PSMSStatusesParameters from '../../../../../definitions/AggregateA2PSMSStatusesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/statuses`;
  }

  /**
   * Retrieves a set of message counts by message status and error codes filtered by dates, batchId and message direction.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/statuses
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  public async get(queryParams?: AggregateA2PSMSStatusesParameters, restRequestConfig?: RestRequestConfig): Promise<MessageStatusesResponse> {
    const r = await this.rc.get<MessageStatusesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
