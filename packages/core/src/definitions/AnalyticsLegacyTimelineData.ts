import AnalyticsLegacyKeyInfo from './AnalyticsLegacyKeyInfo';
import AnalyticsLegacyTimelineDataPoint from './AnalyticsLegacyTimelineDataPoint';

interface AnalyticsLegacyTimelineData {
  /**
   * Required
   */
  key?: string;

  /**
   */
  keyInfo?: AnalyticsLegacyKeyInfo;

  /**
   */
  points?: AnalyticsLegacyTimelineDataPoint[];
}

export default AnalyticsLegacyTimelineData;
