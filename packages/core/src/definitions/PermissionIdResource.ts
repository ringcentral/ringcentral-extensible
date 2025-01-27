import PermissionsCapabilities from "./PermissionsCapabilities.js";

interface PermissionIdResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  id?: string;

  /**
   * Site compatibility flag set for permission
   */
  siteCompatible?: "Compatible" | "Incompatible" | "Independent";

  /**
   * Specifies if the permission is editable on UI (if set to `true`) or not (if set to `false`)
   */
  readOnly?: boolean;

  /**
   * Specifies if the permission can be assigned by the account administrator
   */
  assignable?: boolean;

  /** */
  permissionsCapabilities?: PermissionsCapabilities;
}

export default PermissionIdResource;
