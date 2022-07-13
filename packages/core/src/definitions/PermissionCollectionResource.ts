import PermissionResource from './PermissionResource';
import RNPPagingInfo from './RNPPagingInfo';
import RNPNavigationInfo from './RNPNavigationInfo';

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
  paging?: RNPPagingInfo;

  /**
   */
  navigation?: RNPNavigationInfo;
}

export default PermissionCollectionResource;
