import {Permission} from './index';

class ExtensionPermissionsResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  admin?: Permission;

  /**
   */
  internationalCalling?: Permission;

  /**
   */
  freeSoftPhoneDigitalLine?: Permission;
}
export default ExtensionPermissionsResource;
