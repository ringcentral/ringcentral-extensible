import PerformanceCallsCallSegmentLengthFilter from './PerformanceCallsCallSegmentLengthFilter';

interface CallSegmentFilter {
  /**
   */
  callSegment?: ('Ringing' | 'LiveTalk' | 'Hold' | 'Park' | 'Transfer' | 'IvrPrompt' | 'Voicemail' | 'VmGreeting' | 'Setup');

  /**
   */
  callSegmentLength?: PerformanceCallsCallSegmentLengthFilter;
}

export default CallSegmentFilter;
