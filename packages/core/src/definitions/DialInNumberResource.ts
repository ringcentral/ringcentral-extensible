import MeetingsCountryResource from "./MeetingsCountryResource";

interface DialInNumberResource {
  /** */
  phoneNumber?: string;

  /** */
  formattedNumber?: string;

  /** */
  location?: string;

  /** */
  country?: MeetingsCountryResource;
}

export default DialInNumberResource;
