import type GlobalDialInCountryResponse from './GlobalDialInCountryResponse';

interface TelephonyUserMeetingSettings {
  /**
   * ThirdParty audio option
   */
  thirdPartyAudio?: boolean;

  /**
   * Users can join the meeting using the existing 3rd party audio configuration
   */
  audioConferenceInfo?: boolean;

  /**
   */
  globalDialCountries?: GlobalDialInCountryResponse[];
}

export default TelephonyUserMeetingSettings;
