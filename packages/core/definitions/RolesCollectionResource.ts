import { RoleResource, RNPPagingInfo, RNPNavigationInfo } from './index';

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
