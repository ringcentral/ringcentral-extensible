import {CompanyContactsPagingInfo, ContactResource} from './index';

class DirectoryResource {
  /**
   */
  paging?: CompanyContactsPagingInfo;

  /**
   */
  records?: ContactResource[];
}

export default DirectoryResource;
