import BusinessAddressInfo from './BusinessAddressInfo'

class ModifyAccountBusinessAddressRequest
{
    /**
     * Company business name
     */
    company?: string

    /**
     * Company business email address
     */
    email?: string

    /**
     * Company business address
     * Required
     */
    businessAddress?: BusinessAddressInfo

    /**
     * Custom site name
     */
    mainSiteName?: string
}

export default ModifyAccountBusinessAddressRequest