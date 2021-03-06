import {GlipAttachmentInfoRequest} from './index';

// Post data. At least one attribute should be provided (text or attachments)
class GlipPostPostBody {
  /**
   * Text of a post. Maximum length is 10000 symbols. Mentions can be added in .md format `![:Type](id)`
   */
  text?: string;

  /**
   * Identifier(s) of attachments. Maximum number of attachments is 25
   */
  attachments?: GlipAttachmentInfoRequest[];
}
export default GlipPostPostBody;
