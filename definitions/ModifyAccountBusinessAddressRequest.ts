import BusinessAddressInfo from './BusinessAddressInfo'

class ModifyAccountBusinessAddressRequest
{
    /// <summary>
    /// Company business name
    /// </summary>
    company: string

    /// <summary>
    /// Company business email address
    /// </summary>
    email: string

    /// <summary>
    /// Company business address
    /// Required
    /// </summary>
    businessAddress: BusinessAddressInfo

    /// <summary>
    /// Custom site name
    /// </summary>
    mainSiteName: string
}

export default ModifyAccountBusinessAddressRequest