import MsTeamsUserEntry from "./MsTeamsUserEntry.js";

interface ConnectTeamsUsersRequest {
  /**
   * Required
   */
  mappings?: MsTeamsUserEntry[];
}

export default ConnectTeamsUsersRequest;
