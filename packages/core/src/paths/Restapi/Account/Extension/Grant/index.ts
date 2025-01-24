import type GetExtensionGrantListResponse from "../../../../../definitions/GetExtensionGrantListResponse";
import type ListExtensionGrantsParameters from "../../../../../definitions/ListExtensionGrantsParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/grant`;
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
  public async get(
    queryParams?: ListExtensionGrantsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionGrantListResponse> {
    const r = await this.rc.get<GetExtensionGrantListResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
