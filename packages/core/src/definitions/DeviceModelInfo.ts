import DeviceAddonInfo from "./DeviceAddonInfo.js";

/**
 * HardPhone model information
 */
interface DeviceModelInfo {
  /**
   * Addon identifier. For HardPhones of certain types, which are compatible with this add-on identifier
   */
  id?: string;

  /**
   * Device name
   */
  name?: string;

  /**
   * Add-ons description
   * Required
   */
  addons?: DeviceAddonInfo[];

  /**
   * Device feature or multiple features supported
   */
  features?: ("BLA" | "Intercom" | "Paging" | "HELD")[];
}

export default DeviceModelInfo;
