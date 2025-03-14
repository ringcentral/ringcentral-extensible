import CountryInfoShortModel from "./CountryInfoShortModel.js";

interface PhoneNumberInfoConferencing {
  /** */
  country?: CountryInfoShortModel;

  /**
   * The value should be `true` if the number is default for the conference. Default
   *  conference number is a domestic number that can be set by user (otherwise
   *  it is set by the system). Only one default number per country is allowed
   */
  default?: boolean;

  /**
   * The value should be `true` if any greeting message is played on this number
   */
  hasGreeting?: boolean;

  /**
   * Location (city, region, state) of a conference phone number
   */
  location?: string;

  /**
   * Dial-in phone number to connect to a conference
   */
  phoneNumber?: string;

  /**
   * Indicates if the number is 'premium' (account phone number
   *  with the `ConferencingNumber` usageType)
   */
  premium?: boolean;
}

export default PhoneNumberInfoConferencing;
