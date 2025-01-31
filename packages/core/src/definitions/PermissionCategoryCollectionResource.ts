import PermissionCategoryResource from "./PermissionCategoryResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

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
