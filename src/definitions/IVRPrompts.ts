import { PromptInfo, CallHandlingNavigationInfo, CallHandlingPagingInfo } from '.'

class IVRPrompts {
  /**
   * Link to prompts library resource
   */
  uri?: string

  /**
   * List of Prompts
   */
  records?: PromptInfo[]

  /**
   * Information on navigation
   */
  navigation?: CallHandlingNavigationInfo

  /**
   * Information on paging
   */
  paging?: CallHandlingPagingInfo
}

export default IVRPrompts
