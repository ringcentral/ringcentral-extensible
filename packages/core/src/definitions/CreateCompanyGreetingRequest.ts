import Attachment from './Attachment';

/**
 * Request body for operation createCompanyGreeting
*/
interface CreateCompanyGreetingRequest {
  /**
   * Type of a greeting, specifying the case when the greeting is played.
   * Required
   */
  type?: ('Company' | 'StartRecording' | 'StopRecording' | 'AutomaticRecording' | 'TemplateGreeting');

  /**
   * Internal identifier of an answering rule
   */
  answeringRuleId?: string;

  /**
   * Internal identifier of a language. See Get Language List
   */
  languageId?: string;

  /**
   * Media file to upload
   * Required
   */
  binary?: Attachment;
}

export default CreateCompanyGreetingRequest;
