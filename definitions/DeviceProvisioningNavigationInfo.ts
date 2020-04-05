import DeviceProvisioningNavigationInfoUri from './DeviceProvisioningNavigationInfoUri'

class DeviceProvisioningNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: DeviceProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: DeviceProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: DeviceProvisioningNavigationInfoUri

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: DeviceProvisioningNavigationInfoUri
}

export default DeviceProvisioningNavigationInfo