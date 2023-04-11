import InviteeResource from './InviteeResource';
import RcwPagingModel from './RcwPagingModel';

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
