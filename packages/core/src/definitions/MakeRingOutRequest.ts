import type MakeRingOutCallerIdInfo from "./MakeRingOutCallerIdInfo.js";
import type MakeRingOutCallerInfoRequestFrom from "./MakeRingOutCallerInfoRequestFrom.js";
import type MakeRingOutCallerInfoRequestTo from "./MakeRingOutCallerInfoRequestTo.js";
import type MakeRingOutCountryInfo from "./MakeRingOutCountryInfo.js";

interface MakeRingOutRequest {
  /**
   * Required
   */
  from?: MakeRingOutCallerInfoRequestFrom;

  /**
   * Required
   */
  to?: MakeRingOutCallerInfoRequestTo;

  /**
   */
  callerId?: MakeRingOutCallerIdInfo;

  /**
   * Audio prompt that a calling party hears when a call
   *  is connected
   */
  playPrompt?: boolean;

  /**
   */
  country?: MakeRingOutCountryInfo;
}

export default MakeRingOutRequest;
