import type PermissionResource from "../../../../definitions/PermissionResource";
import type PermissionCollectionResource from "../../../../definitions/PermissionCollectionResource";
import type ListPermissionsParameters from "../../../../definitions/ListPermissionsParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public permissionId: string | null;

  public constructor(
    _parent: ParentInterface,
    permissionId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.permissionId = permissionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.permissionId !== null) {
      return `${this._parent.path()}/permission/${this.permissionId}`;
    }
    return `${this._parent.path()}/permission`;
  }
  /**
   * Returns a list of extension user permissions.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListPermissionsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PermissionCollectionResource> {
    const r = await this.rc.get<PermissionCollectionResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a user permission by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission/{permissionId}
   * Rate Limit Group: Light
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<PermissionResource> {
    if (this.permissionId === null) {
      throw new Error("permissionId must be specified.");
    }
    const r = await this.rc.get<PermissionResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
