import RoleResource from './RoleResource';
import EnumeratedPagingModel from './EnumeratedPagingModel';
import PageNavigationModel from './PageNavigationModel';

interface RolesCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: RoleResource[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default RolesCollectionResource;
