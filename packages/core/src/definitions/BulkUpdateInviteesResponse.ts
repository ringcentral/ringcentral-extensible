import InviteeResource from "./InviteeResource";
import RcwResourceIdModel from "./RcwResourceIdModel";

interface BulkUpdateInviteesResponse {
  /** */
  addedInvitees?: InviteeResource[];

  /** */
  updatedInvitees?: InviteeResource[];

  /** */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesResponse;
