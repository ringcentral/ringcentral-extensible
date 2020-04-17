import { UserAddress, Email, Name, PhoneNumber, Photo, EnterpriseUser, Meta } from '.'

class UserResponse
{
  /**
   * user status
   */
  active?: boolean

  /**
   */
  addresses?: UserAddress[]

  /**
   * Required
   */
  emails?: Email[]

  /**
   * external unique resource id defined by provisioning client
   */
  externalId?: string

  /**
   * unique resource id defined by RingCentral
   */
  id?: string

  /**
   * Required
   */
  name?: Name

  /**
   */
  phoneNumbers?: PhoneNumber[]

  /**
   */
  photos?: Photo[]

  /**
   * Required
   */
  schemas?: ('urn:ietf:params:scim:schemas:core:2.0:User')[]

  /**
   */
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: EnterpriseUser

  /**
   * MUST be same as work type email address
   * Required
   */
  userName?: string

  /**
   */
  meta?: Meta
}

export default UserResponse
