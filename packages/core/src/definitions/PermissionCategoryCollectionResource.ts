import PermissionCategoryResource from "./PermissionCategoryResource";
import EnumeratedPagingModel from "./EnumeratedPagingModel";
import PageNavigationModel from "./PageNavigationModel";

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
