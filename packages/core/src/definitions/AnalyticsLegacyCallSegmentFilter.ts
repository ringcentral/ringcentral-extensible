import AnalyticsLegacyPerformanceCallsCallSegmentLengthFilter from './AnalyticsLegacyPerformanceCallsCallSegmentLengthFilter';

interface AnalyticsLegacyCallSegmentFilter {
  /**
   * Required
   */
  callSegment?: ('Ringing' | 'LiveTalk' | 'Hold' | 'Park' | 'Transfer' | 'IvrPrompt' | 'Voicemail' | 'VmGreeting' | 'Setup');

  /**
   */
  callSegmentLength?: AnalyticsLegacyPerformanceCallsCallSegmentLengthFilter;
}

export default AnalyticsLegacyCallSegmentFilter;
