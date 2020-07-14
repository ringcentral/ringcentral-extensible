import {PermissionIdResource, RoleIdResource} from '.';

class ActivePermissionResource {
  /**
   */
  permission?: PermissionIdResource;

  /**
   */
  effectiveRole?: RoleIdResource;

  /**
   */
  scopes?: (
    | 'Account'
    | 'AllExtensions'
    | 'Federation'
    | 'NonUserExtensions'
    | 'RoleBased'
    | 'Self'
    | 'UserExtensions'
  )[];
}

export default ActivePermissionResource;
