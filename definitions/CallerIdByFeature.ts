import CallerIdByFeatureInfo from './CallerIdByFeatureInfo'

class CallerIdByFeature
{
    /// <summary>
    /// Enum: RingOut, RingMe, CallFlip, FaxNumber, AdditionalSoftphone, Alternate, CommonPhone, MobileApp, Delegated
    /// </summary>
    feature: string

    /// <summary>
    /// </summary>
    callerId: CallerIdByFeatureInfo
}

export default CallerIdByFeature