import { PerformanceCallsCallSegmentLengthFilter } from './index';

class CallSegmentFilter {
  /**
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
