interface ServiceFeatureInfo {
  /**
   * Feature name
   */
  featureName?:
    | "AccountFederation"
    | "Archiver"
    | "AutomaticCallRecordingMute"
    | "AutomaticInboundCallRecording"
    | "AutomaticOutboundCallRecording"
    | "BlockedMessageForwarding"
    | "Calendar"
    | "CallerIdControl"
    | "CallForwarding"
    | "CallPark"
    | "CallParkLocations"
    | "CallSupervision"
    | "CallSwitch"
    | "CallQualitySurvey"
    | "Conferencing"
    | "ConferencingNumber"
    | "ConfigureDelegates"
    | "DeveloperPortal"
    | "DND"
    | "DynamicConference"
    | "EmergencyAddressAutoUpdate"
    | "EmergencyCalling"
    | "EncryptionAtRest"
    | "ExternalDirectoryIntegration"
    | "Fax"
    | "FaxReceiving"
    | "FreeSoftPhoneLines"
    | "HDVoice"
    | "HipaaCompliance"
    | "Intercom"
    | "InternationalCalling"
    | "InternationalSMS"
    | "LinkedSoftphoneLines"
    | "MMS"
    | "MobileVoipEmergencyCalling"
    | "OnDemandCallRecording"
    | "Pager"
    | "PagerReceiving"
    | "Paging"
    | "PasswordAuth"
    | "PromoMessage"
    | "Reports"
    | "Presence"
    | "RCTeams"
    | "RingOut"
    | "SalesForce"
    | "SharedLines"
    | "SingleExtensionUI"
    | "SiteCodes"
    | "SMS"
    | "SMSReceiving"
    | "SoftPhoneUpdate"
    | "TelephonySessions"
    | "UserManagement"
    | "VideoConferencing"
    | "VoipCalling"
    | "VoipCallingOnMobile"
    | "Voicemail"
    | "VoicemailToText"
    | "WebPhone";

  /**
   * Feature status, shows feature availability for the extension
   */
  enabled?: boolean;
}

export default ServiceFeatureInfo;
