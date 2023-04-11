interface RegAnswerModel {
  /**
   * ID of the custom question
   * Required
   * Example: 123456789
   */
  questionId?: string;

  /**
   * The list of answer IDs
   * Required
   */
  answerIds?: string[];

  /**
   * Answer text
   * Required
   */
  answerText?: string;
}

export default RegAnswerModel;
