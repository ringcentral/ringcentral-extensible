interface ExternalIntegrationResource {
  /**
   * Example: 9813
   */
  id?: string;

  /**
   * Example: 1
   */
  typeId?: string;

  /**
   * Example: External
   */
  type?: string;

  /**
   * Example: Integration X
   */
  displayName?: string;

  /**
   * Example: Account
   */
  routingType?: string;

  /**
   * Example: 1726
   */
  outboundEdgeId?: string;
}

export default ExternalIntegrationResource;
