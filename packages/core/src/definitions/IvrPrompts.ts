import PromptInfo from "./PromptInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default IvrPrompts;
