import BatchProvisionUsersSuccessItemExtensionDevices from "./BatchProvisionUsersSuccessItemExtensionDevices";

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
