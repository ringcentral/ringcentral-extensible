interface CommInteractionRuleConditionRequest {
    /**
   * Interaction condition type resource
   * Required
   */
  type?: ('Interaction' | 'Schedule' | 'State');
}

export default CommInteractionRuleConditionRequest;
