import MeetingsCountryResource from "./MeetingsCountryResource.js";

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
