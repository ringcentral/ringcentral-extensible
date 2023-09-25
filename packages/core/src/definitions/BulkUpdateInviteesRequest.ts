import type AddInviteeRequest from './AddInviteeRequest';
import type BulkUpdateInviteesRequestUpdatedInvitees from './BulkUpdateInviteesRequestUpdatedInvitees';
import type RcwResourceIdModel from './RcwResourceIdModel';

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
