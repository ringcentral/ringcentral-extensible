import type RecordingAdminModel from "./RecordingAdminModel.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
