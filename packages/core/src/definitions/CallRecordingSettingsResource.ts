import OnDemandResource from "./OnDemandResource.js";
import AutomaticRecordingResource from "./AutomaticRecordingResource.js";
import CallRecordingGreetingResource from "./CallRecordingGreetingResource.js";

interface CallRecordingSettingsResource {
  /** */
  onDemand?: OnDemandResource;

  /** */
  automatic?: AutomaticRecordingResource;

  /**
   * Collection of Greeting Info
   */
  greetings?: CallRecordingGreetingResource[];
}

export default CallRecordingSettingsResource;
