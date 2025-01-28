import RecordingItemModel from "./RecordingItemModel";
import RcwPagingModel from "./RcwPagingModel";

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
