import type ParticipantExtendedModel from "./ParticipantExtendedModel.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
