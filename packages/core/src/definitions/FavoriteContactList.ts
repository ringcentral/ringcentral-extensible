import FavoriteContactResource from "./FavoriteContactResource.js";

interface FavoriteContactList {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: FavoriteContactResource[];
}

export default FavoriteContactList;
