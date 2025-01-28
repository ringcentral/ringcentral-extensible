import ParticipantExtendedModel from "./ParticipantExtendedModel";
import RcwPagingModel from "./RcwPagingModel";

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
