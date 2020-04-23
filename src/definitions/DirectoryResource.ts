import { CompanyContactsPagingInfo, ContactResource } from '.'

class DirectoryResource {
  /**
   */
  paging?: CompanyContactsPagingInfo

  /**
   */
  records?: ContactResource[]
}

export default DirectoryResource
