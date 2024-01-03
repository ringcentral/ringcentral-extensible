import type PermissionCategoryResource from '../../../../definitions/PermissionCategoryResource';
import type PermissionCategoryCollectionResource from '../../../../definitions/PermissionCategoryCollectionResource';
import type ListPermissionCategoriesParameters from '../../../../definitions/ListPermissionCategoriesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public permissionCategoryId: string | null;

  public constructor(_parent: ParentInterface, permissionCategoryId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.permissionCategoryId = permissionCategoryId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.permissionCategoryId !== null) {
      return `${this._parent.path()}/permission-category/${this.permissionCategoryId}`;
    }
    return `${this._parent.path()}/permission-category`;
  }
  /**
   * Returns a list of permission categories.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission-category
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListPermissionCategoriesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PermissionCategoryCollectionResource> {
    const r = await this.rc.get<PermissionCategoryCollectionResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a permission category by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission-category/{permissionCategoryId}
   * Rate Limit Group: Light
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<PermissionCategoryResource> {
    if (this.permissionCategoryId === null) {
      throw new Error('permissionCategoryId must be specified.');
    }
    const r = await this.rc.get<PermissionCategoryResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
