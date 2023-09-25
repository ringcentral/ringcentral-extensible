import type InviteeResource from './InviteeResource';
import type RcwPagingModel from './RcwPagingModel';

interface WcsInviteeListResource {
  /**
   * Required
   */
  records?: InviteeResource[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default WcsInviteeListResource;
