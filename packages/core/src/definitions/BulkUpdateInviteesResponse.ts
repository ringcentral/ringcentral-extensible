import type InviteeResource from "./InviteeResource";
import type RcwResourceIdModel from "./RcwResourceIdModel";

interface BulkUpdateInviteesResponse {
  /** */
  addedInvitees?: InviteeResource[];

  /** */
  updatedInvitees?: InviteeResource[];

  /** */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesResponse;
