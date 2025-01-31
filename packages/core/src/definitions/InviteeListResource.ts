import InviteeModel from "./InviteeModel.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
