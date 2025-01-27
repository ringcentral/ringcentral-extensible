import PermissionResource from "./PermissionResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

interface PermissionCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: PermissionResource[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default PermissionCollectionResource;
