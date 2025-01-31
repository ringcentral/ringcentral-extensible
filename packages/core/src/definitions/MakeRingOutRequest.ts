import MakeRingOutCallerInfoRequestFrom from "./MakeRingOutCallerInfoRequestFrom.js";
import MakeRingOutCallerInfoRequestTo from "./MakeRingOutCallerInfoRequestTo.js";
import MakeRingOutCallerIdInfo from "./MakeRingOutCallerIdInfo.js";
import MakeRingOutCountryInfo from "./MakeRingOutCountryInfo.js";

interface MakeRingOutRequest {
  /**
   * Required
   */
  from?: MakeRingOutCallerInfoRequestFrom;

  /**
   * Required
   */
  to?: MakeRingOutCallerInfoRequestTo;

  /** */
  callerId?: MakeRingOutCallerIdInfo;

  /**
   * Audio prompt that a calling party hears when a call
   *  is connected
   */
  playPrompt?: boolean;

  /** */
  country?: MakeRingOutCountryInfo;
}

export default MakeRingOutRequest;
