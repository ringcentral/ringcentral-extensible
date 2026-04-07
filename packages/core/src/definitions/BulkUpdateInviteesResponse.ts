import type InviteeResource from "./InviteeResource.js";
import type RcwResourceIdModel from "./RcwResourceIdModel.js";

interface BulkUpdateInviteesResponse {
  /**
   */
  addedInvitees?: InviteeResource[];

  /**
   */
  updatedInvitees?: InviteeResource[];

  /**
   */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesResponse;
