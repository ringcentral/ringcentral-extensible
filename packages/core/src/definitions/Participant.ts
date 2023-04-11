/**
 * Participant information
*/
interface Participant {
  /**
   * id
   */
  id?: string;

  /**
   * account id
   */
  accountId?: string;

  /**
   * extension id
   */
  extensionId?: string;

  /**
   * displayName
   */
  displayName?: string;

  /**
   * caller id
   */
  callerId?: string;
}

export default Participant;
