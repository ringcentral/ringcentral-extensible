import PermissionInfo from './PermissionInfo'

    // Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'
class ExtensionPermissions
{
    /// <summary>
    /// Admin permission
    /// </summary>
    admin: PermissionInfo

    /// <summary>
    /// International Calling permission
    /// </summary>
    internationalCalling: PermissionInfo
}

export default ExtensionPermissions