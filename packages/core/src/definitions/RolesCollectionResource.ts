import RoleResource from "./RoleResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

interface RolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: RoleResource[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default RolesCollectionResource;
