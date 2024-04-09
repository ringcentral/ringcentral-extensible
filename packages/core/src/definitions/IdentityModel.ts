import type IdentityExtraValues from './IdentityExtraValues';

interface IdentityModel {
  /**
   * Identity identifier.
   * Required
   * Example: 506d9e817aa58d1259000f12
   */
  id?: string;

  /**
   * Identity's avatar Uri.
   * Format: uri
   * Example: https://example.com/assets/avatar/default-79fd530c58c2a6b83a11fcc0e842ed7023ceb69292cfeb857bc2af2c624b90fd.png
   */
  avatarUri?: string;

  /**
   * Company.
   * Example: Test Company
   */
  company?: string;

  /**
   * Creation time of the resource.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  creationTime?: string;

  /**
   * Display name of the identity.
   * Example: John Doe
   */
  displayName?: string;

  /**
   * Email address.
   * Format: email
   * Example: user@example.com
   */
  emailAddress?: string;

  /**
   */
  extraValues?: IdentityExtraValues;

  /**
   * FirstName.
   * Example: John
   */
  firstName?: string;

  /**
   * Gender.
   * Example: Woman
   */
  gender?: 'Man' | 'Woman';

  /**
   * Phone number.
   * Example: +33634231224
   */
  homePhone?: string;

  /**
   * The identity group id references the identity group that contains
   *  all information (phone, notes, etc.). Many identities may belong to
   *  this group. If the identity group id is null, it means that identity
   *  does not have a group and any extra information.
   * Example: 54085e5b7aa58d8b5d00006c
   */
  identityGroupId?: string;

  /**
   * LastName.
   * Example: Doe
   */
  lastName?: string;

  /**
   * Phone number.
   * Example: +33634231224
   */
  mobilePhone?: string;

  /**
   * Screen name of the identity.
   * Example: John D.
   */
  screenName?: string;

  /**
   * Type of the identity.
   * Required
   */
  type?:
    | 'AppleMessagesForBusiness'
    | 'Email'
    | 'EngageMessaging'
    | 'Facebook'
    | 'GoogleBusinessMessages'
    | 'GoogleMyBusiness'
    | 'Instagram'
    | 'Linkedin'
    | 'Twitter'
    | 'Viber'
    | 'WhatsApp'
    | 'Youtube';

  /**
   * The time when the last modification was completed.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  lastModifiedTime?: string;

  /**
   * List of the associated user identifiers who can use the identity.
   */
  userIds?: string[];

  /**
   * UUID of the identity.
   * Example: 9680ab94-3b78-495c-bb2c-a969954d8260
   */
  uuid?: string;

  /**
   * Device info of the identity.
   *
   *  Applicable to RingCX Digital Messaging channels only.
   * Example: iPhone (iPhone); iOS 15.0.2
   */
  mobileDeviceInfo?: string;

  /**
   * Facebook biography of the identity.
   *
   *  Applicable to Facebook and Messenger channels only.
   * Example: Painter living in Paris
   */
  fbBio?: string;

  /**
   * Facebook category of the identity.
   *
   *  Applicable to Facebook and Messenger channels only.
   * Example: Computers/Internet
   */
  fbCategory?: string;

  /**
   * Facebook locale of the identity.
   *
   *  Applicable to Facebook and Messenger channels only.
   * Example: fr_FR
   */
  fbLocale?: string;

  /**
   * Instagram followers count of the identity.
   *
   *  Applicable to Instagram and InstagramMessaging channels only.
   * Format: int32
   * Example: 10
   */
  igFollowersCount?: number;

  /**
   * Twitter description of the identity.
   *
   *  Applicable to Twitter channels only.
   * Example: Software Engineer
   */
  twDescription?: string;

  /**
   * Twitter followers count of the identity.
   *
   *  Applicable to Twitter channels only.
   * Format: int32
   * Example: 10
   */
  twFollowersCount?: number;

  /**
   * Count of Twitter accounts followed by the identity.
   *
   *  Applicable to Twitter channels only.
   * Format: int32
   * Example: 500
   */
  twFollowingCount?: number;

  /**
   * Count of tweets of the identity.
   *
   *  Applicable to Twitter channels only.
   * Format: int32
   * Example: 42
   */
  twStatusesCount?: number;

  /**
   * Twitter location of the identity.
   *
   *  Applicable to Twitter channels only.
   * Example: Paris
   */
  twLocation?: string;

  /**
   * Viber API version of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: 10
   */
  apiVersion?: string;

  /**
   * Viber country of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: FR
   */
  country?: string;

  /**
   * Viber device type of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: SM-G970U1
   */
  deviceType?: string;

  /**
   * Viber language of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: fr-FR
   */
  language?: string;

  /**
   * Viber mobile country code of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: 1
   */
  mcc?: string;

  /**
   * Viber mobile network code of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: 220
   */
  mnc?: string;

  /**
   * Viber primary device OS of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: Android 11
   */
  primaryDeviceOs?: string;

  /**
   * Viber application version of the identity.
   *
   *  Applicable to Viber channels only.
   * Example: 19.5.0
   */
  viberVersion?: string;
}

export default IdentityModel;
