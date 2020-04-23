import { PermissionIdResource, RoleIdResource } from '.'

class ActivePermissionResource {
  /**
   */
  permission?: PermissionIdResource

  /**
   */
  effectiveRole?: RoleIdResource

  /**
   */
  scopes?: string[]
}

export default ActivePermissionResource
