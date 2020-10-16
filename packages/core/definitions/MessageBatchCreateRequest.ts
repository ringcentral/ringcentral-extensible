import {MessageCreateRequest} from './index';

// Batch of A2P SMS messages. This object provides specification to send message(s) to many recipients. It contains top-level attributes, such as `text`, `expiresIn`, `scheduledAt` which apply to all `messages`. In addition to that, it is possible to override this attribute for each message. This way a single API call may be used to send individual messages to many recipients.
class MessageBatchCreateRequest {
  /**
   * Sender's phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format.
   * Required
   */
  from?: string;

  /**
   * Text to send to `messages.to` phone numbers. Can be overridden on a per-message basis
   */
  text?: string;

  /**
   * Default scheduled time to send messages. Can be overridden on a per-message basis. If not present, message(s) are sent as soon as possible.
   */
  scheduledAt?: string;

  /**
   * Number of seconds since `scheduledAt` this message is relevant for. If more time than `expiresIn` has passed since `scheduledAt` (or current time, if no scheduled time specified) and the message has not been sent yet, it becomes discarded. Can be overridden on a per-message basis.
   */
  expiresIn?: number;

  /**
   * Individual messages
   * Required
   */
  messages?: MessageCreateRequest[];
}

export default MessageBatchCreateRequest;
