import CompanyContactsPagingInfo from './CompanyContactsPagingInfo';
import ContactResource from './ContactResource';

interface DirectoryResource {
  /**
   */
  paging?: CompanyContactsPagingInfo;

  /**
   */
  records?: ContactResource[];
}

export default DirectoryResource;
