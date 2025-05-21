interface CommIntegrationRequest {
  /**
   * Integration type
   * Required
   */
  type?: "MsTeamsDirectRouting" | "FmcLite";
}

export default CommIntegrationRequest;
