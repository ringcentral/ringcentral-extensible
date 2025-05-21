/**
 * Basic participant information
 */
interface Participant {
  /**
   * Required
   */
  id?: string;

  /** */
  accountId?: string;

  /** */
  extensionId?: string;

  /** */
  displayName?: string;

  /**
   * Non empty if user joined by phone
   */
  callerId?: string;

  /**
   * Participant type
   * Required
   */
  type?: string;

  /**
   * Pass-thru parameter in join url
   */
  correlationId?: string;
}

export default Participant;
