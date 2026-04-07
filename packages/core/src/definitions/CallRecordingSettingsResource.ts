import type AutomaticRecordingResource from "./AutomaticRecordingResource.js";
import type CallRecordingGreetingResource from "./CallRecordingGreetingResource.js";
import type OnDemandResource from "./OnDemandResource.js";

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
