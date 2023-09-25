/**
 * Session origin details
 */
interface OriginInfo {
  /**
   * Session origin type
   */
  type?: 'Call' | 'RingOut' | 'RingMe' | 'Conference' | 'GreetingsRecording' | 'VerificationCall' | 'Zoom' | 'CallOut';
}

export default OriginInfo;
