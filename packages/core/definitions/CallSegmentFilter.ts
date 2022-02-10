import {PerformanceCallsCallSegmentLengthFilter} from './index';

/**
 * Filtering calls by segment
 */
class CallSegmentFilter {
  /**
   * Required
   */
  callSegment?:
    | 'Ringing'
    | 'LiveTalk'
    | 'Hold'
    | 'Park'
    | 'Transfer'
    | 'IvrPrompt'
    | 'Voicemail'
    | 'VmGreeting';

  /**
   */
  callSegmentLength?: PerformanceCallsCallSegmentLengthFilter;
}
export default CallSegmentFilter;
