interface CommForwardingTargetRequest {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";
}

export default CommForwardingTargetRequest;
