import { Attachment, CustomCompanyGreetingAnsweringRuleInfo } from '.'

class CreateCompanyGreetingRequest {
  /**
   * Type of a greeting, specifying the case when the greeting is played.
   */
  type?: ('Company' | 'StartRecording' | 'StopRecording' | 'AutomaticRecording')

  /**
   * Internal identifier of a language. See Get Language List
   */
  languageId?: string

  /**
   * Meida file to upload
   */
  binary?: Attachment

  /**
   */
  answeringRule?: CustomCompanyGreetingAnsweringRuleInfo
}

export default CreateCompanyGreetingRequest
