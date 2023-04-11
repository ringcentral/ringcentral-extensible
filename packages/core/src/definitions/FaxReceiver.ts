/**
 * Fax receiver
*/
interface FaxReceiver {
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string;

  /**
   * Name of the receiver
   */
  name?: string;
}

export default FaxReceiver;
