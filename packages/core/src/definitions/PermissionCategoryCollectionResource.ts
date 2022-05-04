import PermissionCategoryResource from './PermissionCategoryResource';
import RNPPagingInfo from './RNPPagingInfo';
import RNPNavigationInfo from './RNPNavigationInfo';

class PermissionCategoryCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: PermissionCategoryResource[];

  /**
   */
  paging?: RNPPagingInfo;

  /**
   */
  navigation?: RNPNavigationInfo;
}

export default PermissionCategoryCollectionResource;
