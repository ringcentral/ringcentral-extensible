interface FixedAnswerModel {
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
}

export default FixedAnswerModel;
