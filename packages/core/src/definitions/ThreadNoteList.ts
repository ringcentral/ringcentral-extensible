import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type ThreadNoteModel from "./ThreadNoteModel.js";

interface ThreadNoteList {
  /**
   * Required
   */
  records?: ThreadNoteModel[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default ThreadNoteList;
