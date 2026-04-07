import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type PermissionCategoryResource from "./PermissionCategoryResource.js";

interface PermissionCategoryCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: PermissionCategoryResource[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default PermissionCategoryCollectionResource;
