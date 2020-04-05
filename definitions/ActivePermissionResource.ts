import PermissionIdResource from './PermissionIdResource'
import RoleIdResource from './RoleIdResource'

class ActivePermissionResource
{
    /// <summary>
    /// </summary>
    permission: PermissionIdResource

    /// <summary>
    /// </summary>
    effectiveRole: RoleIdResource

    /// <summary>
    /// </summary>
    scopes: string[]
}

export default ActivePermissionResource