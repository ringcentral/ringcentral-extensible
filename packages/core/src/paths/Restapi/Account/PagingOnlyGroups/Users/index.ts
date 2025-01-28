import PagingOnlyGroupUsers from "../../../../../definitions/PagingOnlyGroupUsers";
import ListPagingGroupUsersParameters from "../../../../../definitions/ListPagingGroupUsersParameters";
import {
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
    return `${this._parent.path()}/users`;
  }
  /**
   * Returns a list of users allowed to page this group.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  public async get(
    queryParams?: ListPagingGroupUsersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PagingOnlyGroupUsers> {
    const r = await this.rc.get<PagingOnlyGroupUsers>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
