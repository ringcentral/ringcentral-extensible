import { PermissionResource, RNPPagingInfo, RNPNavigationInfo } from './index';

class PermissionCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: PermissionResource[];

  /**
   */
  paging?: RNPPagingInfo;

  /**
   */
  navigation?: RNPNavigationInfo;
}
export default PermissionCollectionResource;
