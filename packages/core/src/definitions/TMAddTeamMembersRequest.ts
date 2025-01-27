import TMAddTeamMembersRequestMembers from "./TMAddTeamMembersRequestMembers.js";

interface TMAddTeamMembersRequest {
  /**
   * Identifier(s) of chat member(s)
   * Required
   */
  members?: TMAddTeamMembersRequestMembers[];
}

export default TMAddTeamMembersRequest;
