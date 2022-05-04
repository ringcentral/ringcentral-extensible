import { RestRequestConfig } from '../../../../../Rest';
import { AggregateA2PSMSStatusesParameters, MessageStatusesResponse } from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/statuses`;
  }

  /**
   * Retrieves a set of message counts by message status and error codes filtered by dates, batchId and message direction.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/statuses
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(queryParams?: AggregateA2PSMSStatusesParameters, restRequestConfig?: RestRequestConfig): Promise<MessageStatusesResponse> {
    const r = await this.rc.get<MessageStatusesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
