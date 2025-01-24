import type PermissionCategoryResource from "./PermissionCategoryResource";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";
import type PageNavigationModel from "./PageNavigationModel";

interface PermissionCategoryCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: PermissionCategoryResource[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default PermissionCategoryCollectionResource;
