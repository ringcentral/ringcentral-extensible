import type SocMsgContentAttachment from './SocMsgContentAttachment';
import type ContentBodyFormatted from './ContentBodyFormatted';
import type ContentContextData from './ContentContextData';

interface ContentModel {
  /**
   * Array of attachments to be added to the content
   * Required
   */
  attachments?: SocMsgContentAttachment[];

  /**
   * Identity identifier of the content author. Not mandatory on creation,
   *  by default it uses the token's user first identity on channel
   * Required
   */
  authorIdentityId?: string;

  /**
   * Auto submitted content:
   *    - won't reopen tasks or interventions
   *    - can be used to send automatic messages like asking an user to follow on twitter, sending a survey, etc,
   *    - doesn't get included in statistics
   * Required
   */
  autoSubmitted?: boolean;

  /**
   * Content body. On creation this field is mandatory except for WhatsApp content
   *  using templates. The following are the channels supported and their **max length**
   *  restrictions (in brackets):
   *
   *    - *Apple Messages For Business* (10000)
   *    - *Email* (262144)
   *    - *RingCX Digital Messaging* (1024)
   *    - *Facebook* (8000)
   *    - *Google My Business* (4000)
   *    - *Instagram* (950)
   *    - *Instagram Messaging* (1000)
   *    - *LinkedIn* (3000)
   *    - *Messenger* (2000)
   *    - *Twitter* (280)
   *    - *Viber* (7000)
   *    - *WhatsApp* (3800)
   *    - *Youtube* (8000)
   * Required
   * Example: Body of the content
   */
  body?: string;

  /**
   * Required
   */
  bodyFormatted?: ContentBodyFormatted;

  /**
   * Content input format
   * Required
   */
  bodyInputFormat?: 'Text' | 'Html';

  /**
   * List of the category identifiers of the content
   * Required
   * Example: 541014e17aa58d8ccf000023,541014e17aa58d8ccf002023
   */
  categoryIds?: string[];

  /**
   * Direction of the content.
   *
   *  * Incoming contents are received from a channel.
   *  * Outgoing contents are exported to a channel.
   * Example: Incoming
   */
  contentDirection?: 'Incoming' | 'Outgoing';

  /**
   */
  contextData?: ContentContextData;

  /**
   * Creation time of the resource.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  creationTime?: string;

  /**
   * Source of content
   * Required
   */
  createdFrom?: 'Synchronizer' | 'Interface' | 'Api' | 'AutoSurvey' | 'AutoResponseTrigger' | 'AutoRequestEmail';

  /**
   * RingCentral user identifier of the creator
   * Required
   * Example: 2683222036
   */
  creatorId?: string;

  /**
   * True if the content is the first in the thread.
   */
  firstInThread?: boolean;

  /**
   * External categories of the content.
   *  Returned only if the content has `foreignCategories`
   * Example: foreign_category_id
   */
  foreignCategories?: string[];

  /**
   * Content identifier
   * Required
   */
  id?: string;

  /**
   * Identifier of the content identity to which this content is a reply to.
   *  If the channel does not support discussion initiation, this parameter is mandatory
   * Required
   */
  inReplyToAuthorIdentityId?: string;

  /**
   * Content identifier to which this content is a reply to. On creation, if omitted,
   *  a new discussion will be created. If the channel does not support discussion initiation,
   *  this parameter is mandatory
   * Required
   */
  inReplyToContentId?: string;

  /**
   * Intervention identifier of the content
   * Required
   */
  interventionId?: string;

  /**
   * Language of the content
   * Required
   * Example: En
   */
  language?: string;

  /**
   * If set to `true`, then the content is publicly visible on remote channel.
   *  Private content is NOT supported on every channel
   * Required
   * Default: true
   */
  public?: boolean;

  /**
   * If set to `true`, then the content is published on remote channel
   * Required
   * Example: true
   */
  published?: boolean;

  /**
   * Rating of content. Present only if the content supports rating and rating is filled
   * Required
   * Format: int32
   * Example: 4
   */
  rating?: number;

  /**
   * Set to `true` if content has been deleted on remote channel
   * Required
   */
  remotelyDeleted?: boolean;

  /**
   * Channel identifier.
   * Required
   * Example: 506d9e817aa58d1259000f12
   */
  channelId?: string;

  /**
   * Type of a channel
   * Required
   */
  channelType?:
    | 'AppleMessagesForBusiness'
    | 'Email'
    | 'EngageMessaging'
    | 'Facebook'
    | 'GoogleMyBusiness'
    | 'Instagram'
    | 'InstagramMessaging'
    | 'Linkedin'
    | 'Messenger'
    | 'Twitter'
    | 'Viber'
    | 'WhatsApp'
    | 'Youtube';

  /**
   * External URI of a content channel
   * Required
   * Format: uri
   */
  channelUri?: string;

  /**
   * Content status
   * Required
   */
  status?: 'New' | 'Assigned' | 'Replied' | 'UserReply' | 'UserInitiated' | 'Ignored';

  /**
   * Synchronization status
   * Required
   * Example: success
   */
  synchronizationStatus?: string;

  /**
   * Synchronization error details
   * Required
   */
  synchronizationError?: string;

  /**
   * Content thread identifier
   * Required
   */
  threadId?: string;

  /**
   * Applicable to Email channels only. The subject of the email.
   *  This field is mandatory when initiating a discussion
   * Required
   * Example: An email title
   */
  title?: string;

  /**
   * Type of the content
   * Required
   * Example: Email
   */
  type?:
    | 'Album'
    | 'AuthenticateMessage'
    | 'AuthenticateResponse'
    | 'Carousel'
    | 'CarouselMessage'
    | 'Comment'
    | 'ContactMessage'
    | 'Content'
    | 'Email'
    | 'FormMessage'
    | 'FormResponse'
    | 'HsmMessage'
    | 'Link'
    | 'ListMessage'
    | 'Media'
    | 'Message'
    | 'OutboundMessage'
    | 'PaymentMessage'
    | 'Photo'
    | 'PostbackMessage'
    | 'PrivateTweet'
    | 'PromptMessage'
    | 'Question'
    | 'Review'
    | 'ReviewResponse'
    | 'RichLinkMessage'
    | 'SelectMessage'
    | 'Status'
    | 'TemplateMessage'
    | 'TimePickerMessage'
    | 'Tweet'
    | 'Video'
    | 'VideoCallRequestMessage';

  /**
   * The time when the last modification was completed.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  lastModifiedTime?: string;

  /**
   * Types of structured messages that can be used to reply to this type of message
   * Required
   */
  capabilitiesSupported?: string[];
}

export default ContentModel;
