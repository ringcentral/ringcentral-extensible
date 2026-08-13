interface CommCloudDestination {
  /**
   * Required
   * Example: 1111111
   */
  integrationId?: string;

  /**
   * Example: 88888
   */
  extensionNumber?: string;

  /**
   * Example: +16509994313
   */
  phoneNumber?: string;
}

export default CommCloudDestination;
