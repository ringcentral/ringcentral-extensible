import MessageTemplateInfo from "./MessageTemplateInfo.js";
import Site from "./Site.js";

interface MessageTemplateUpdateRequest {
  /**
   * Name of a template
   */
  displayName?: string;

  /**
   * Required
   */
  body?: MessageTemplateInfo;

  /** */
  site?: Site;
}

export default MessageTemplateUpdateRequest;
