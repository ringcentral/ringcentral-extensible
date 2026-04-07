import type RecordingItemModel from "./RecordingItemModel.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
