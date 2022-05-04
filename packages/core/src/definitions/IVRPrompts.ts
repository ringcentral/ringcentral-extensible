import PromptInfo from './PromptInfo';
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo';
import CallHandlingPagingInfo from './CallHandlingPagingInfo';

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
