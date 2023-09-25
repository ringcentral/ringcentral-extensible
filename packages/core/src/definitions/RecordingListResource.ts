import type RecordingItemModel from './RecordingItemModel';
import type RcwPagingModel from './RcwPagingModel';

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
