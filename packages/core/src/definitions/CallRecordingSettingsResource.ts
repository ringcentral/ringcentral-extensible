import type OnDemandResource from './OnDemandResource';
import type AutomaticRecordingResource from './AutomaticRecordingResource';
import type CallRecordingGreetingResource from './CallRecordingGreetingResource';

interface CallRecordingSettingsResource {
  /**
   */
  onDemand?: OnDemandResource;

  /**
   */
  automatic?: AutomaticRecordingResource;

  /**
   * Collection of Greeting Info
   */
  greetings?: CallRecordingGreetingResource[];
}

export default CallRecordingSettingsResource;
