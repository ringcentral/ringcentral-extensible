/**
 * Token endpoint request parameters used in the "One-time Password" (OTP) authorization flow
 * with the `otp` grant type
 */
interface OtpTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: "otp";

  /**
   * For `otp` grant type only.
   *  One-time password code
   * Required
   */
  code?: string;
}

export default OtpTokenRequest;
