import {Attachment, CustomGreetingAnsweringRuleInfoRequest} from '.';

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
   * Meida file to upload
   */
  binary?: Attachment;

  /**
   */
  answeringRule?: CustomGreetingAnsweringRuleInfoRequest;
}

export default CreateCustomUserGreetingRequest;
