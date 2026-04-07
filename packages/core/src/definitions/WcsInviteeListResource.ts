import type InviteeResource from "./InviteeResource.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
