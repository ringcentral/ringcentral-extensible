import UserAddress from './UserAddress'
import Email from './Email'
import Name from './Name'
import PhoneNumber from './PhoneNumber'
import Photo from './Photo'
import EnterpriseUser from './EnterpriseUser'

class CreateUser
{
    /// <summary>
    /// User status
    /// </summary>
    active: boolean

    /// <summary>
    /// </summary>
    addresses: UserAddress[]

    /// <summary>
    /// Required
    /// </summary>
    emails: Email[]

    /// <summary>
    /// external unique resource id defined by provisioning client
    /// </summary>
    externalId: string

    /// <summary>
    /// Required
    /// </summary>
    name: Name

    /// <summary>
    /// </summary>
    phoneNumbers: PhoneNumber[]

    /// <summary>
    /// </summary>
    photos: Photo[]

    /// <summary>
    /// Required
    /// </summary>
    schemas: string[]

    /// <summary>
    /// </summary>
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": EnterpriseUser

    /// <summary>
    /// MUST be same as work type email address
    /// Required
    /// </summary>
    userName: string
}

export default CreateUser