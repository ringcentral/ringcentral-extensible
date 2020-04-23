import { IVRMenuPromptInfo, IVRMenuActionsInfo } from '.'

class IVRMenuInfo {
  /**
   * Internal identifier of an IVR Menu extension
   */
  id?: string

  /**
   * Link to an IVR Menu extension resource
   */
  uri?: string

  /**
   * First name of an IVR Menu user
   */
  name?: string

  /**
   * Number of an IVR Menu extension
   */
  extensionNumber?: string

  /**
   * Site data
   */
  site?: string

  /**
   * Prompt metadata
   */
  prompt?: IVRMenuPromptInfo

  /**
   * Keys handling settings
   */
  actions?: IVRMenuActionsInfo[]
}

export default IVRMenuInfo
