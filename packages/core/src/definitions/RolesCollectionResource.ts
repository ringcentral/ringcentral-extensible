import RoleResource from './RoleResource';
import RNPPagingInfo from './RNPPagingInfo';
import RNPNavigationInfo from './RNPNavigationInfo';

class RolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: RoleResource[];

  /**
   */
  paging?: RNPPagingInfo;

  /**
   */
  navigation?: RNPNavigationInfo;
}

export default RolesCollectionResource;
