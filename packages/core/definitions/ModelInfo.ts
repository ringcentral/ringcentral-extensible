import {AddonInfo} from './index';

// HardPhone model information
class ModelInfo {
  /**
   * Internal identifier of a HardPhone device model
   */
  id?: string;

  /**
   * Device name
   */
  name?: string;

  /**
   * Addons description
   */
  addons?: AddonInfo[];

  /**
   * Device feature or multiple features supported
   */
  features?: ('BLA' | 'CommonPhone' | 'Intercom' | 'Paging' | 'HELD')[];

  /**
   * Max supported count of phone lines
   */
  lineCount?: number;
}

export default ModelInfo;
