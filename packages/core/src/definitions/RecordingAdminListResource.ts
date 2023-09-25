import type RecordingAdminModel from './RecordingAdminModel';
import type RcwPagingModel from './RcwPagingModel';

interface RecordingAdminListResource {
  /**
   * Required
   */
  records?: RecordingAdminModel[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default RecordingAdminListResource;
