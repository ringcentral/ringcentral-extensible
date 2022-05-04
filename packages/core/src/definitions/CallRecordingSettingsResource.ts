import { OnDemandResource, AutomaticRecordingResource, GreetingResource } from './index';

class CallRecordingSettingsResource {
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
