import type ParticipantExtendedModel from './ParticipantExtendedModel';
import type RcwPagingModel from './RcwPagingModel';

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
