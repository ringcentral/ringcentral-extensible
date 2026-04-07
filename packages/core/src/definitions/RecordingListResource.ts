import RecordingItemModel from "./RecordingItemModel.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
