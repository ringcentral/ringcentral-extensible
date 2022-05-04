import { RestRequestConfig } from '../../../../../Rest';
import { ListExtensionGrantsParameters, GetExtensionGrantListResponse } from '../../../../../definitions';
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
    return `${this.parent.path()}/grant`;
  }

  /**
   * Returns the list of extensions with the information on grants given to the current extension regarding them. Currently the list of grants include: picking up a call, monitoring, calling or receiving a call on behalf of somebody, call delegation and calling paging groups.
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
