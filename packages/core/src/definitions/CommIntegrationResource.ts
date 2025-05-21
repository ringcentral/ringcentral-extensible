interface CommIntegrationResource {
  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
   */
  phoneNumber?: string;

  /**
   * Integration type
   * Required
   */
  type?: "MsTeamsDirectRouting" | "FmcLite";
}

export default CommIntegrationResource;
