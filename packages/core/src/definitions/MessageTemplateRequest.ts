import MessageTemplateInfo from "./MessageTemplateInfo";
import Site from "./Site";

interface MessageTemplateRequest {
  /**
   * Name of a template
   * Required
   */
  displayName?: string;

  /**
   * Required
   */
  body?: MessageTemplateInfo;

  /** */
  site?: Site;
}

export default MessageTemplateRequest;
