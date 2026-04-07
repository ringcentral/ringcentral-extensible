import type InviteeModel from "./InviteeModel.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
