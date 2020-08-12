import {OrderBy} from './index';

class SearchDirectoryEntriesRequest {
  /**
   * String value to filter the contacts. The value specified is searched through the following fields: `firstName`, `lastName`, `extensionNumber`, `phoneNumber`, `email`
   */
  searchString?: string;

  /**
   * If 'True' then contacts of all accounts in federation are returned. If 'False' then only contacts of the current account are returned, and account section is eliminated in this case
   * Default: true
   */
  showFederated?: boolean;

  /**
   * Type of extension to filter the contacts
   */
  extensionType?:
    | 'User'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'IvrMenu'
    | 'Limited'
    | 'ApplicationExtension'
    | 'Site'
    | 'Bot';

  /**
   * Sorting settings
   */
  orderBy?: OrderBy[];

  /**
   */
  page?: number;

  /**
   */
  perPage?: number;
}

export default SearchDirectoryEntriesRequest;
