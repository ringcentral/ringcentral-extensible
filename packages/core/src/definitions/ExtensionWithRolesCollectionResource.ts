import ExtensionWithRolesResource from "./ExtensionWithRolesResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

interface ExtensionWithRolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: ExtensionWithRolesResource[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default ExtensionWithRolesCollectionResource;
