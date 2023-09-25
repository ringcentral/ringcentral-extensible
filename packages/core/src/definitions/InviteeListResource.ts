import type InviteeModel from './InviteeModel';
import type RcwPagingModel from './RcwPagingModel';

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
