import PermissionResource from './PermissionResource';
import EnumeratedPagingModel from './EnumeratedPagingModel';
import PageNavigationModel from './PageNavigationModel';

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
