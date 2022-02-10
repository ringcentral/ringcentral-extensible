/**
 * Query parameters for operation listUserRoles
 */
class ListUserRolesParameters {
  /**
   * Specifies whether to return custom or predefined only roles. If not specified, all roles are returned
   */
  custom?: boolean;

  /**
   * Default: 1
   */
  page?: string;

  /**
   * Default: 100
   */
  perPage?: string;
}
export default ListUserRolesParameters;
