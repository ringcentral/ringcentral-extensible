import type DeviceAddonInfo from './DeviceAddonInfo';

/**
 * HardPhone model information
 */
interface DeviceModelInfo {
  /**
   * Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
   */
  id?: string;

  /**
   * Device name
   */
  name?: string;

  /**
   * Addons description
   * Required
   */
  addons?: DeviceAddonInfo[];

  /**
   * Device feature or multiple features supported
   */
  features?: ('BLA' | 'Intercom' | 'Paging' | 'HELD')[];
}

export default DeviceModelInfo;
