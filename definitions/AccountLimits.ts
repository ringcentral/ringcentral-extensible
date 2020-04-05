class AccountLimits
{
    /// <summary>
    /// Max number of free softphone phone lines per user extension
    /// </summary>
    freeSoftPhoneLinesPerExtension: number

    /// <summary>
    /// Max number of participants in RingCentral meeting hosted by this account's user
    /// </summary>
    meetingSize: number

    /// <summary>
    /// Meetings recording cloud storage limitaion in Gb
    /// </summary>
    cloudRecordingStorage: number

    /// <summary>
    /// Max number of extensions which can be included in the list of users monitored for Presence
    /// </summary>
    maxMonitoredExtensionsPerUser: number

    /// <summary>
    /// Max length of extension numbers of an account; the supported value is up to 8 symbols, depends on account type
    /// Default: 5
    /// </summary>
    maxExtensionNumberLength: number

    /// <summary>
    /// Length of a site code
    /// </summary>
    siteCodeLength: number

    /// <summary>
    /// Length of a short extension number
    /// </summary>
    shortExtensionNumberLength: number
}

export default AccountLimits