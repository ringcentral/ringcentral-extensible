interface ParticipantTypeModel {
  /**
   * The type of the participant specified in invite or determined at join time
   * Required
   * Default: User
   */
  type?: 'User' | 'Room';
}

export default ParticipantTypeModel;
