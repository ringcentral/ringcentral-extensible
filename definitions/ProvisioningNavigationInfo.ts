import ProvisioningNavigationInfoUri from './ProvisioningNavigationInfoUri'

class ProvisioningNavigationInfo
{
    /**
     * Canonical URI for the first page of the list
     */
    firstPage?: ProvisioningNavigationInfoUri

    /**
     * Canonical URI for the next page of the list
     */
    nextPage?: ProvisioningNavigationInfoUri

    /**
     * Canonical URI for the previous page of the list
     */
    previousPage?: ProvisioningNavigationInfoUri

    /**
     * Canonical URI for the last page of the list
     */
    lastPage?: ProvisioningNavigationInfoUri
}

export default ProvisioningNavigationInfo