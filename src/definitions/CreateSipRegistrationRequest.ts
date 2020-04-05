import DeviceInfoRequest from './DeviceInfoRequest'
import SIPInfoRequest from './SIPInfoRequest'

class CreateSipRegistrationRequest
{
    /**
     * Device unique description
     */
    device?: DeviceInfoRequest

    /**
     * SIP settings for device
     */
    sipInfo?: SIPInfoRequest[]
}

export default CreateSipRegistrationRequest