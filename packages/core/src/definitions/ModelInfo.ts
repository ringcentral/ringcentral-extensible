import type AddonInfo from "./AddonInfo";

/**
 * HardPhone model information
 */
interface ModelInfo {
  /**
   * Internal identifier of a HardPhone device model
   */
  id?: string;

  /**
   * Device name
   */
  name?: string;

  /**
   * Add-ons description
   */
  addons?: AddonInfo[];

  /** */
  deviceClass?: string;

  /**
   * Device feature or multiple features supported
   */
  features?: ("BLA" | "CommonPhone" | "Intercom" | "Paging" | "HELD")[];

  /**
   * Max supported count of phone lines
   * Format: int32
   */
  lineCount?: number;
}

export default ModelInfo;
