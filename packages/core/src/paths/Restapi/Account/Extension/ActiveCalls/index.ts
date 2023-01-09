import ActiveCallsResponse from '../../../../../definitions/ActiveCallsResponse';
import ListExtensionActiveCallsParameters from '../../../../../definitions/ListExtensionActiveCallsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/active-calls`;
  }

  /**
   * Returns records of all extension calls that are in progress, ordered
 * by start time in descending order.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/active-calls
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async get(queryParams?: ListExtensionActiveCallsParameters, restRequestConfig?: RestRequestConfig): Promise<ActiveCallsResponse> {
    const r = await this.rc.get<ActiveCallsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
