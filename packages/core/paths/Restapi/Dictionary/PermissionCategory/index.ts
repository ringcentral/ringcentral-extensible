import {RestRequestConfig} from '../../../../Rest';
import {
  ListPermissionCategoriesParameters,
  PermissionCategoryCollectionResource,
  PermissionCategoryResource,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  permissionCategoryId: string | null;

  constructor(parent: Parent, permissionCategoryId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.permissionCategoryId = permissionCategoryId;
  }
  path(withParameter = true): string {
    if (withParameter && this.permissionCategoryId !== null) {
      return `${this.parent.path()}/permission-category/${
        this.permissionCategoryId
      }`;
    }
    return `${this.parent.path()}/permission-category`;
  }
  /**
   * Returns the list of permission categories.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission-category
   * Rate Limit Group: Light
   */
  async list(
    queryParams?: ListPermissionCategoriesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<PermissionCategoryCollectionResource> {
    const r = await this.rc.get<PermissionCategoryCollectionResource>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns permission category by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/permission-category/{permissionCategoryId}
   * Rate Limit Group: Light
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<PermissionCategoryResource> {
    if (this.permissionCategoryId === null) {
      throw new Error('permissionCategoryId must be specified.');
    }
    const r = await this.rc.get<PermissionCategoryResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
