import type ExtensionWithRolesResource from "./ExtensionWithRolesResource";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";
import type PageNavigationModel from "./PageNavigationModel";

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
