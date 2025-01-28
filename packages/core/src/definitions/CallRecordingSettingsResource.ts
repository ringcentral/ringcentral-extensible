import OnDemandResource from "./OnDemandResource";
import AutomaticRecordingResource from "./AutomaticRecordingResource";
import CallRecordingGreetingResource from "./CallRecordingGreetingResource";

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
