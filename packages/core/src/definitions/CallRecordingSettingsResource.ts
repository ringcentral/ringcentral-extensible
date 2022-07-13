import OnDemandResource from './OnDemandResource';
import AutomaticRecordingResource from './AutomaticRecordingResource';
import GreetingResource from './GreetingResource';

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
  greetings?: GreetingResource[];
}

export default CallRecordingSettingsResource;
