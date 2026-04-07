import type AddInviteeRequest from "./AddInviteeRequest.js";
import type BulkUpdateInviteesRequestUpdatedInvitees from "./BulkUpdateInviteesRequestUpdatedInvitees.js";
import type RcwResourceIdModel from "./RcwResourceIdModel.js";

interface BulkUpdateInviteesRequest {
  /**
   */
  addedInvitees?: AddInviteeRequest[];

  /**
   */
  updatedInvitees?: BulkUpdateInviteesRequestUpdatedInvitees[];

  /**
   */
  deletedInvitees?: RcwResourceIdModel[];
}

export default BulkUpdateInviteesRequest;
