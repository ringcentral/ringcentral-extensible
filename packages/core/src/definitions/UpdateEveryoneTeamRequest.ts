interface UpdateEveryoneTeamRequest {
  /**
   * Everyone chat name. Maximum number of characters supported is 250
   */
  name?: string;

  /**
   * Everyone chat description. Maximum number of characters supported is 1000
   */
  description?: string;
}

export default UpdateEveryoneTeamRequest;
