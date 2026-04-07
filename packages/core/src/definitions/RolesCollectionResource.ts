import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type RoleResource from "./RoleResource.js";

interface RolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: RoleResource[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default RolesCollectionResource;
