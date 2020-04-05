import OnDemandResource from './OnDemandResource'
import AutomaticRecordingResource from './AutomaticRecordingResource'
import GreetingResource from './GreetingResource'

class CallRecordingSettingsResource
{
    /// <summary>
    /// </summary>
    onDemand: OnDemandResource

    /// <summary>
    /// </summary>
    automatic: AutomaticRecordingResource

    /// <summary>
    /// Collection of Greeting Info
    /// </summary>
    greetings: GreetingResource[]
}

export default CallRecordingSettingsResource