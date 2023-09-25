import type PromptInfo from './PromptInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
