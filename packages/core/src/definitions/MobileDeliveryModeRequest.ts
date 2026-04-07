interface MobileDeliveryModeRequest {
  /**
   * The transport type for this subscription
   * Required
   */
  transportType?: "RC/APNS" | "RC/GCM";

  /**
   * Certificate name for mobile notification transports
   * Required
   */
  certificateName?: string;

  /**
   * Device instance ID for mobile notification transports
   * Required
   * Example: 38b062ae-85f8-4dcc-8734-04d3f7393d42
   */
  registrationId?: string;
}

export default MobileDeliveryModeRequest;
