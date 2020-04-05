import ProvisioningNavigationInfoUri from './ProvisioningNavigationInfoUri'

class ProvisioningNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: ProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: ProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: ProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: ProvisioningNavigationInfoUri
}

export default ProvisioningNavigationInfo