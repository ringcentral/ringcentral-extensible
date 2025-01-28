import MakeRingOutCallerInfoRequestFrom from "./MakeRingOutCallerInfoRequestFrom";
import MakeRingOutCallerInfoRequestTo from "./MakeRingOutCallerInfoRequestTo";
import MakeRingOutCallerIdInfo from "./MakeRingOutCallerIdInfo";
import MakeRingOutCountryInfo from "./MakeRingOutCountryInfo";

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
