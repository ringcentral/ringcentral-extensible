import CompanyContactsPagingInfo from './CompanyContactsPagingInfo'
import ContactResource from './ContactResource'

class DirectoryResource
{
    /// <summary>
    /// </summary>
    paging: CompanyContactsPagingInfo

    /// <summary>
    /// </summary>
    records: ContactResource[]
}

export default DirectoryResource