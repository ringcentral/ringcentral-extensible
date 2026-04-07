import type RcwPagingModel from "./RcwPagingModel.js";
import type RecordingAdminModel from "./RecordingAdminModel.js";

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
