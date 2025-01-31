import InviteeResource from "./InviteeResource.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
