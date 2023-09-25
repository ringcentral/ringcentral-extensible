import type Attachment from './Attachment';
import type GreetingAnsweringRuleId from './GreetingAnsweringRuleId';

/**
 * Request body for operation createCompanyGreeting
 */
interface CreateCompanyGreetingRequest {
  /**
   * Type of a greeting, specifying the case when the greeting
   *  is played.
   * Required
   */
  type?: 'Company' | 'StartRecording' | 'StopRecording' | 'AutomaticRecording' | 'TemplateGreeting';

  /**
   * Internal identifier of a language. See Get Language
   *  List
   */
  languageId?: string;

  /**
   * Media file to upload
   * Required
   */
  binary?: Attachment;

  /**
   */
  answeringRule?: GreetingAnsweringRuleId;
}

export default CreateCompanyGreetingRequest;
