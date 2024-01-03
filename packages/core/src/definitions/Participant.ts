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

  /**
   * pass-thru parameter in join url
   */
  correlationId?: string;
}

export default Participant;
