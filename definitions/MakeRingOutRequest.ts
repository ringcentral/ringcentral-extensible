import MakeRingOutCallerInfoRequestFrom from './MakeRingOutCallerInfoRequestFrom'
import MakeRingOutCallerInfoRequestTo from './MakeRingOutCallerInfoRequestTo'
import MakeRingOutCoutryInfo from './MakeRingOutCoutryInfo'

class MakeRingOutRequest
{
    /// <summary>
    /// Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number
    /// Required
    /// </summary>
    from: MakeRingOutCallerInfoRequestFrom

    /// <summary>
    /// Phone number of the called party. This number corresponds to the 2nd leg of a RingOut call
    /// Required
    /// </summary>
    to: MakeRingOutCallerInfoRequestTo

    /// <summary>
    /// The number which will be displayed to the called party
    /// </summary>
    callerId: MakeRingOutCallerInfoRequestTo

    /// <summary>
    /// The audio prompt that the calling party hears when the call is connected
    /// </summary>
    playPrompt: boolean

    /// <summary>
    /// Optional. Dialing plan country data. If not specified, then extension home country is applied by default
    /// </summary>
    country: MakeRingOutCoutryInfo
}

export default MakeRingOutRequest