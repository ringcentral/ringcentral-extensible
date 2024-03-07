/**
 * Participant information
 */
interface Participant {
  /**
   * Participant type
   * Required
   */
  type?: string;

  /**
   * id
   * Required
   */
  id?: string;

  /**
   * Account id
   */
  accountId?: string;

  /**
   * Extension id
   */
  extensionId?: string;

  /**
   * Display name
   */
  displayName?: string;

  /**
   * Caller id
   */
  callerId?: string;

  /**
   * Pass-thru parameter in join url
   */
  correlationId?: string;
}

export default Participant;
