import MeetingsCountryResource from './MeetingsCountryResource';

class DialInNumberResource {
  /**
   */
  phoneNumber?: string;

  /**
   */
  formattedNumber?: string;

  /**
   */
  location?: string;

  /**
   */
  country?: MeetingsCountryResource;
}

export default DialInNumberResource;
