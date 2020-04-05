import PermissionIdResource from './PermissionIdResource'
import RoleIdResource from './RoleIdResource'

class ActivePermissionResource
{
    /**
     */
    permission: PermissionIdResource

    /**
     */
    effectiveRole: RoleIdResource

    /**
     */
    scopes: string[]
}

export default ActivePermissionResource