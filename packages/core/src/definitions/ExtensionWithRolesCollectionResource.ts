import ExtensionWithRolesResource from "./ExtensionWithRolesResource";
import EnumeratedPagingModel from "./EnumeratedPagingModel";
import PageNavigationModel from "./PageNavigationModel";

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
