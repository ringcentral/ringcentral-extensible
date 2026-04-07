import type RcwPagingModel from "./RcwPagingModel.js";
import type RecordingItemModel from "./RecordingItemModel.js";

interface RecordingListResource {
  /**
   * Required
   */
  records?: RecordingItemModel[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default RecordingListResource;
