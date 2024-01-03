interface ConversationalInsightsUnitValues {
  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;

  /**
   * Required
   * Example: RingCentral MVP
   */
  value?: string;

  /**
   * Required
   * Format: float
   * Example: 4.7
   */
  start?: number;

  /**
   * Required
   * Format: float
   * Example: 5.1
   */
  end?: number;

  /**
   * Paragraph index of the long summary.
   * Example: 0
   */
  groupId?: string;

  /**
   * Example: JohnDoe
   */
  speakerId?: string;

  /**
   * Example: Speaker
   */
  assignee?: string;

  /**
   * Example: NextStep
   */
  category?: string;

  /**
   * Example: All right, now let us go down to a CD settings.
   */
  text?: string;

  /**
   * Example: So so you want me to add it to the B D as well?
   */
  question?: string;

  /**
   * Example: Or or you can add another tab and have it resigned.
   */
  answer?: string;
}

export default ConversationalInsightsUnitValues;
