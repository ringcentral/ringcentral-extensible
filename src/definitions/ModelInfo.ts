import { AddonInfo } from '.'

class ModelInfo
{
  /**
   * Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
   */
  id?: string

  /**
   * Device name
   */
  name?: string

  /**
   * Addons description
   * Required
   */
  addons?: AddonInfo[]

  /**
   * Device feature or multiple features supported
   */
  features?: ('BLA' | 'Intercom' | 'Paging' | 'HELD')[]

  /**
   * Max supported count of phone lines
   */
  lineCount?: number
}

export default ModelInfo
