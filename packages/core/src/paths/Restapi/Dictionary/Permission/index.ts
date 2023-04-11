import PermissionResource from '../../../../definitions/PermissionResource';
import PermissionCollectionResource from '../../../../definitions/PermissionCollectionResource';
import ListPermissionsParameters from '../../../../definitions/ListPermissionsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  permissionId: string | null;

  constructor(parent: ParentInterface, permissionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.permissionId = permissionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.permissionId !== null) {
      return `${this.parent.path()}/permission/${this.permissionId}`;
    }
    return `${this.parent.path()}/permission`;
  }

  /**
   * Returns a list of extension user permissions.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission
   * Rate Limit Group: Light
   */
  async list(queryParams?: ListPermissionsParameters, restRequestConfig?: RestRequestConfig): Promise<PermissionCollectionResource> {
    const r = await this.rc.get<PermissionCollectionResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a user permission by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission/{permissionId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<PermissionResource> {
    if (this.permissionId === null) {
      throw new Error('permissionId must be specified.');
    }
    const r = await this.rc.get<PermissionResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
