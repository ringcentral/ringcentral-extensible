import PromptInfo from './PromptInfo';
import NavigationInfo from './NavigationInfo';
import EnumeratedPaging from './EnumeratedPaging';

interface IvrPrompts {
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
  navigation?: NavigationInfo;

  /**
   */
  paging?: EnumeratedPaging;
}

export default IvrPrompts;
