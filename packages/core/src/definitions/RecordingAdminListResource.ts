import RecordingAdminModel from './RecordingAdminModel';
import RcwPagingModel from './RcwPagingModel';

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
