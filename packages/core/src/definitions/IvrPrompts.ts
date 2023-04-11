import PromptInfo from './PromptInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface IvrPrompts {
  /**
   * Link to prompts library resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of Prompts
   */
  records?: PromptInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default IvrPrompts;
