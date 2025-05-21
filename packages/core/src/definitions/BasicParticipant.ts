/**
 * Basic participant information
 */
interface BasicParticipant {
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
}

export default BasicParticipant;
