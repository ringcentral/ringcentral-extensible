import AddInviteeRequest from "./AddInviteeRequest";
import BulkUpdateInviteesRequestUpdatedInvitees from "./BulkUpdateInviteesRequestUpdatedInvitees";
import RcwResourceIdModel from "./RcwResourceIdModel";

interface BulkUpdateInviteesRequest {
  /** */
  addedInvitees?: AddInviteeRequest[];

  /** */
  updatedInvitees?: BulkUpdateInviteesRequestUpdatedInvitees[];

  /** */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesRequest;
