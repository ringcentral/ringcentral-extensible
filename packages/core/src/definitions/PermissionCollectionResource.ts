import type PermissionResource from './PermissionResource';
import type EnumeratedPagingModel from './EnumeratedPagingModel';
import type PageNavigationModel from './PageNavigationModel';

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
