import TemplateInfo from './TemplateInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class UserTemplates
{
    /// <summary>
    /// Link to user templates resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of user templates
    /// Required
    /// </summary>
    records: TemplateInfo[]

    /// <summary>
    /// Information on navigation
    /// Required
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// Required
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default UserTemplates