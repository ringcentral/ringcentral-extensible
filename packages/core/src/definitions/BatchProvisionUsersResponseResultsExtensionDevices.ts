interface BatchProvisionUsersResponseResultsExtensionDevices {
  /**
   * The internal identifier of device created
   * Example: 12345
   */
  id?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  phoneNumber?: string;
}

export default BatchProvisionUsersResponseResultsExtensionDevices;
