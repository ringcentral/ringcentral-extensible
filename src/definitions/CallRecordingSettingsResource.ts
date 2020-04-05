import OnDemandResource from './OnDemandResource'
import AutomaticRecordingResource from './AutomaticRecordingResource'
import GreetingResource from './GreetingResource'

class CallRecordingSettingsResource
{
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
