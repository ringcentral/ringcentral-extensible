import InviteeResource from "./InviteeResource.js";
import RcwResourceIdModel from "./RcwResourceIdModel.js";

interface BulkUpdateInviteesResponse {
  /** */
  addedInvitees?: InviteeResource[];

  /** */
  updatedInvitees?: InviteeResource[];

  /** */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesResponse;
