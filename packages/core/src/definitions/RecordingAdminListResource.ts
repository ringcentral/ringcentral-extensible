import RecordingAdminModel from "./RecordingAdminModel.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
