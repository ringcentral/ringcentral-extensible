import { BusinessAddressInfo } from '.'

class ModifyAccountBusinessAddressRequest {
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
   */
  businessAddress?: BusinessAddressInfo

  /**
   * Custom site name
   */
  mainSiteName?: string
}

export default ModifyAccountBusinessAddressRequest
