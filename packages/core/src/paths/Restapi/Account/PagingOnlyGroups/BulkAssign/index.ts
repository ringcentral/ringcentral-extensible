import type EditPagingGroupRequest from "../../../../../definitions/EditPagingGroupRequest";
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
    return `${this._parent.path()}/bulk-assign`;
  }
  /**
   * Adds and/or removes paging group users and devices.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: Groups
   */
  public async post(
    editPagingGroupRequest: EditPagingGroupRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      editPagingGroupRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
