import GetExtensionGrantListResponse from '../../../../../definitions/GetExtensionGrantListResponse';
import ListExtensionGrantsParameters from '../../../../../definitions/ListExtensionGrantsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/grant`;
  }

  /**
   * Returns the list of extensions with information on grants
 * given to the current extension regarding them. Currently the list of grants
 * include: picking up a call, monitoring, calling or receiving a call on behalf
 * of somebody, call delegation and calling paging groups.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/grant
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(queryParams?: ListExtensionGrantsParameters, restRequestConfig?: RestRequestConfig): Promise<GetExtensionGrantListResponse> {
    const r = await this.rc.get<GetExtensionGrantListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
