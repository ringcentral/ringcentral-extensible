/**
 * Information about a call party that monitors a call
*/
class SupervisePartyFrom {
  /**
   * Phone number of a party
   */
  phoneNumber?: string;

  /**
   * Displayed name of a party
   */
  name?: string;

  /**
   * Internal identifier of a device
   */
  deviceId?: string;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;
}

export default SupervisePartyFrom;
