import { PermissionCategoryResource, RNPPagingInfo, RNPNavigationInfo } from './index';

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
