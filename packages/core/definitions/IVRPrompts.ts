import {
  PromptInfo,
  CallHandlingNavigationInfo,
  CallHandlingPagingInfo,
} from './index';

class IVRPrompts {
  /**
   * Link to prompts library resource
   */
  uri?: string;

  /**
   * List of Prompts
   */
  records?: PromptInfo[];

  /**
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   */
  paging?: CallHandlingPagingInfo;
}

export default IVRPrompts;
