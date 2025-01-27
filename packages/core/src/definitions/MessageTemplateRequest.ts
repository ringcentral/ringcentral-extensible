import MessageTemplateInfo from "./MessageTemplateInfo.js";
import Site from "./Site.js";

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
