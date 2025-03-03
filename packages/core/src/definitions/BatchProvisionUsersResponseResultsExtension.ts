import BatchProvisionUsersResponseResultsExtensionDevices from "./BatchProvisionUsersResponseResultsExtensionDevices.js";

interface BatchProvisionUsersResponseResultsExtension {
  /**
   * The internal identifier of RingCentral extension created
   * Example: 12345
   */
  id?: string;

  /** */
  devices?: BatchProvisionUsersResponseResultsExtensionDevices[];
}

export default BatchProvisionUsersResponseResultsExtension;
