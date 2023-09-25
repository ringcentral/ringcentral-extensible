import type RoleResource from './RoleResource';
import type EnumeratedPagingModel from './EnumeratedPagingModel';
import type PageNavigationModel from './PageNavigationModel';

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
