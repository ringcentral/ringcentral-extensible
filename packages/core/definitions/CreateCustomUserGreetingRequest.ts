class CreateCustomUserGreetingRequest {
  /**
   * Type of a greeting, specifying the case when the greeting is played.
   */
  type?:
    | 'Introductory'
    | 'Announcement'
    | 'ConnectingMessage'
    | 'ConnectingAudio'
    | 'Voicemail'
    | 'Unavailable'
    | 'HoldMusic';

  /**
   * Internal identifier of an answering rule
   */
  answeringRuleId?: string;

  /**
   * Media file to upload
   */
  binary?: string;
}

export default CreateCustomUserGreetingRequest;
