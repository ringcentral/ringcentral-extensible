import PermissionInfo from './PermissionInfo'

    // Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'
class ExtensionPermissions
{
    /**
     * Admin permission
     */
    admin: PermissionInfo

    /**
     * International Calling permission
     */
    internationalCalling: PermissionInfo
}

export default ExtensionPermissions