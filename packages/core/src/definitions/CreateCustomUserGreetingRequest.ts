import Attachment from "./Attachment";
import GreetingAnsweringRuleId from "./GreetingAnsweringRuleId";

/**
 * Request body for operation createCustomUserGreeting
 */
interface CreateCustomUserGreetingRequest {
  /**
   * Type of greeting, specifying the case when the greeting is played.
   * Required
   */
  type?:
    | "Introductory"
    | "Announcement"
    | "ConnectingMessage"
    | "ConnectingAudio"
    | "Voicemail"
    | "Unavailable"
    | "HoldMusic"
    | "TemplateGreeting";

  /**
   * Media file to upload
   * Required
   */
  binary?: Attachment;

  /** */
  answeringRule?: GreetingAnsweringRuleId;
}

export default CreateCustomUserGreetingRequest;
