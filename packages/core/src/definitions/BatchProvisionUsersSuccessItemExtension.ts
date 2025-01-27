import BatchProvisionUsersSuccessItemExtensionDevices from "./BatchProvisionUsersSuccessItemExtensionDevices.js";

interface BatchProvisionUsersSuccessItemExtension {
  /**
   * The internal identifier of RingCentral extension created
   * Example: 12345
   */
  id?: string;

  /** */
  devices?: BatchProvisionUsersSuccessItemExtensionDevices[];
}

export default BatchProvisionUsersSuccessItemExtension;
