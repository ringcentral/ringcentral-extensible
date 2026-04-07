import TMRemoveTeamMembersRequestMembers from "./TMRemoveTeamMembersRequestMembers.js";

interface TMRemoveTeamMembersRequest {
  /**
   * Identifier(s) of chat members.
   * Required
   */
  members?: TMRemoveTeamMembersRequestMembers[];
}

export default TMRemoveTeamMembersRequest;
