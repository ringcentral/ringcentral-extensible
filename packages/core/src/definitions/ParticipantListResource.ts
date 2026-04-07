import ParticipantExtendedModel from "./ParticipantExtendedModel.js";
import RcwPagingModel from "./RcwPagingModel.js";

interface ParticipantListResource {
  /**
   * Required
   */
  records?: ParticipantExtendedModel[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default ParticipantListResource;
