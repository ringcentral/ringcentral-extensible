import type PhoneNumberInfoConferencing from "./PhoneNumberInfoConferencing";

interface GetConferencingInfoResponse {
  /**
   * Canonical URI of a conferencing
   * Format: uri
   */
  uri?: string;

  /**
   * Determines if host user allows conference participants to join
   *  before the host
   */
  allowJoinBeforeHost?: boolean;

  /**
   * Access code for a host user
   */
  hostCode?: string;

  /**
   * Internal parameter specifying a conferencing engine
   */
  mode?: string;

  /**
   * Access code for any participant
   */
  participantCode?: string;

  /**
   * Primary conference phone number for user's home country returned
   *  in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
   */
  phoneNumber?: string;

  /**
   * Link to a branded support page
   * Example: http://success.ringcentral.com
   */
  supportUri?: string;

  /**
   * Short URL leading to the service web page Tap to Join for audio
   *  conference bridge
   * Format: uri
   */
  tapToJoinUri?: string;

  /**
   * List of multiple dial-in phone numbers to connect to audio
   *  conference service, relevant for the user's brand. Each number is given with
   *  the country and location information, in order to let the user choose
   *  less expensive way to connect to a conference. The first number in
   *  the list is a primary conference number, that is default and domestic
   */
  phoneNumbers?: PhoneNumberInfoConferencing[];
}

export default GetConferencingInfoResponse;
