interface VariableAnswerModel {
  /**
   * ID of the custom question
   * Required
   * Example: 123456789
   */
  questionId?: string;

  /**
   * Answer text
   * Required
   */
  answerText?: string;
}

export default VariableAnswerModel;
