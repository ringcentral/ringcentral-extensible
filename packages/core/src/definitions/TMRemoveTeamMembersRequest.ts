import TMRemoveTeamMembersRequestMembers from './TMRemoveTeamMembersRequestMembers';

interface TMRemoveTeamMembersRequest {
  /**
   * Identifier(s) of chat members.
   * Required
   */
  members?: TMRemoveTeamMembersRequestMembers[];
}

export default TMRemoveTeamMembersRequest;
