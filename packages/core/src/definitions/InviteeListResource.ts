import InviteeModel from './InviteeModel';
import RcwPagingModel from './RcwPagingModel';

interface InviteeListResource {
  /**
   * Required
   */
  records?: InviteeModel[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default InviteeListResource;
