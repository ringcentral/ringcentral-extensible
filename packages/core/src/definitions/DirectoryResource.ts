import CompanyContactsPagingInfo from './CompanyContactsPagingInfo';
import ContactResource from './ContactResource';

class DirectoryResource {
  /**
   */
  paging?: CompanyContactsPagingInfo;

  /**
   */
  records?: ContactResource[];
}

export default DirectoryResource;
