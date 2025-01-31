import AddInviteeRequest from "./AddInviteeRequest.js";
import BulkUpdateInviteesRequestUpdatedInvitees from "./BulkUpdateInviteesRequestUpdatedInvitees.js";
import RcwResourceIdModel from "./RcwResourceIdModel.js";

interface BulkUpdateInviteesRequest {
  /** */
  addedInvitees?: AddInviteeRequest[];

  /** */
  updatedInvitees?: BulkUpdateInviteesRequestUpdatedInvitees[];

  /** */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesRequest;
