import { OnDemandResource, AutomaticRecordingResource, GreetingResource } from '.'

class CallRecordingSettingsResource {
  /**
   */
  onDemand?: OnDemandResource

  /**
   */
  automatic?: AutomaticRecordingResource

  /**
   * Collection of Greeting Info
   */
  greetings?: GreetingResource[]
}

export default CallRecordingSettingsResource
