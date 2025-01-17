import type AIInsights from './AIInsights';

interface RecordingInsights {
  /**
   * Title of the call
   * Required
   * Example: Call from 1234567890 to 0987654321
   */
  title?: string;

  /**
   * URI of the call recording
   * Example: https://ringsense.ringcentral.com/calls/2e67979e-ff82-4171-ae30-20c0c1f19b27
   */
  rsRecordUri?: string;

  /**
   * Source rc application of the recording
   * Required
   * Example: pbx
   */
  domain?: 'pbx';

  /**
   * Recording ID of the domain
   * Required
   * Example: 4b57_384543
   */
  sourceRecordId?: string;

  /**
   * Session ID of the domain
   * Required
   * Example: cbac2b78-6f74-4257-8167-dff864de2263!us-10-dca09@us-10
   */
  sourceSessionId?: string;

  /**
   * Optional call direction in case of phone call recording
   * Example: Inbound
   */
  callDirection?: 'Inbound' | 'Outbound';

  /**
   * Extension id of the call recording owner
   * Required
   * Example: 123456789
   */
  ownerExtensionId?: string;

  /**
   * Duration of the call recording (in ms)
   * Required
   * Format: int32
   * Example: 112000
   */
  recordingDurationMs?: number;

  /**
   * Start time of the call recording
   * Required
   * Format: date-time
   */
  recordingStartTime?: string;

  /**
   * Creation time of the call insights
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Last modified time of the call insights
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * List of the participants in the call
   * Required
   */
  speakerInfo?: object[];

  /**
   * Required
   */
  insights?: AIInsights;
}

export default RecordingInsights;
