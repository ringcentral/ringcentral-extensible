import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type PermissionResource from "./PermissionResource.js";

interface PermissionCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: PermissionResource[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default PermissionCollectionResource;
