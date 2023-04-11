/**
 * Phone number of a called party. This number corresponds to the
 * 2nd leg of a RingOut call
 *
*/
interface MakeRingOutCallerInfoRequestTo {
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string;
}

export default MakeRingOutCallerInfoRequestTo;
