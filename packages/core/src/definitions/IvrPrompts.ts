import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type PromptInfo from "./PromptInfo.js";

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
