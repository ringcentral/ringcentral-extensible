import type FavoriteContactResource from './FavoriteContactResource';

interface FavoriteContactList {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: FavoriteContactResource[];
}

export default FavoriteContactList;
