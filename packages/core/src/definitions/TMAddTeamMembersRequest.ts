import type TMAddTeamMembersRequestMembers from './TMAddTeamMembersRequestMembers';

interface TMAddTeamMembersRequest {
  /**
   * Identifier(s) of chat member(s)
   * Required
   */
  members?: TMAddTeamMembersRequestMembers[];
}

export default TMAddTeamMembersRequest;
