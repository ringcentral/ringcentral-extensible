import PagingInfo from './PagingInfo';
import ContactResource from './ContactResource';

interface DirectoryResource {
  /**
   * Required
   */
  paging?: PagingInfo;

  /**
   * Required
   */
  records?: ContactResource[];
}

export default DirectoryResource;
