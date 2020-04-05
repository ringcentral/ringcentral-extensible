import CallerIdByFeatureInfo from './CallerIdByFeatureInfo'

class CallerIdByFeature
{
    /**
     * Enum: RingOut, RingMe, CallFlip, FaxNumber, AdditionalSoftphone, Alternate, CommonPhone, MobileApp, Delegated
     */
    feature?: string

    /**
     */
    callerId?: CallerIdByFeatureInfo
}

export default CallerIdByFeature