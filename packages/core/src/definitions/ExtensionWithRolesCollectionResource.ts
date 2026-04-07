import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type ExtensionWithRolesResource from "./ExtensionWithRolesResource.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface ExtensionWithRolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: ExtensionWithRolesResource[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default ExtensionWithRolesCollectionResource;
