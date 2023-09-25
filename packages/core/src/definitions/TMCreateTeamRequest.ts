import type TMCreateTeamRequestMembers from './TMCreateTeamRequestMembers';

interface TMCreateTeamRequest {
  /**
   * Team access level.
   */
  public?: boolean;

  /**
   * Team name.
   * Required
   */
  name?: string;

  /**
   * Team description.
   */
  description?: string;

  /**
   * Identifier(s) of team members.
   */
  members?: TMCreateTeamRequestMembers[];
}

export default TMCreateTeamRequest;
