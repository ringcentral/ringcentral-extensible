interface AddPartyRequest {
  /**
   * Internal identifier of a call session
   * Required
   */
  sessionId?: string;

  /**
   * Internal identifier of a party that should be added to the call session
   * Required
   */
  partyId?: string;
}

export default AddPartyRequest;
