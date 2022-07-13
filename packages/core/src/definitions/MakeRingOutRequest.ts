import MakeRingOutCallerInfoRequestFrom from './MakeRingOutCallerInfoRequestFrom';
import MakeRingOutCallerInfoRequestTo from './MakeRingOutCallerInfoRequestTo';
import MakeRingOutCallerIdInfo from './MakeRingOutCallerIdInfo';
import MakeRingOutCoutryInfo from './MakeRingOutCoutryInfo';

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
   * The audio prompt that the calling party hears when the call is connected
   */
  playPrompt?: boolean;

  /**
   */
  country?: MakeRingOutCoutryInfo;
}

export default MakeRingOutRequest;
