import DeviceInfoRequest from './DeviceInfoRequest'
import SIPInfoRequest from './SIPInfoRequest'

class CreateSipRegistrationRequest
{
    /// <summary>
    /// Device unique description
    /// </summary>
    device: DeviceInfoRequest

    /// <summary>
    /// SIP settings for device
    /// </summary>
    sipInfo: SIPInfoRequest[]
}

export default CreateSipRegistrationRequest