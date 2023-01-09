import Attachment from './Attachment';

/**
 * Request body for operation createCustomUserGreeting
*/
interface CreateCustomUserGreetingRequest {
  /**
   * Type of a greeting, specifying the case when the greeting is played.
   * Required
   */
  type?: ('Introductory' | 'Announcement' | 'ConnectingMessage' | 'ConnectingAudio' | 'Voicemail' | 'Unavailable' | 'HoldMusic' | 'TemplateGreeting');

  /**
   * Internal identifier of an answering rule
   * Required
   */
  answeringRuleId?: string;

  /**
   * Media file to upload
   * Required
   */
  binary?: Attachment;
}

export default CreateCustomUserGreetingRequest;
