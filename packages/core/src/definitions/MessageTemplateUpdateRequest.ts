import MessageTemplateInfo from "./MessageTemplateInfo";
import Site from "./Site";

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
