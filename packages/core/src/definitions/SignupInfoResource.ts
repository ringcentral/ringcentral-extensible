/**
 * Account sign up data
 */
interface SignupInfoResource {
  /** */
  tosAccepted?: boolean;

  /** */
  signupState?: (
    | "AccountCreated"
    | "BillingEntered"
    | "CreditCardApproved"
    | "AccountConfirmed"
    | "PhoneVerificationRequired"
    | "PhoneVerificationPassed"
  )[];

  /** */
  verificationReason?:
    | "CC_Failed"
    | "Phone_Suspicious"
    | "CC_Phone_Not_Match"
    | "AVS_Not_Available"
    | "MaxMind"
    | "CC_Blacklisted"
    | "Email_Blacklisted"
    | "Phone_Blacklisted"
    | "Cookie_Blacklisted"
    | "Device_Blacklisted"
    | "IP_Blacklisted"
    | "Agent_Instance_Blacklisted"
    | "Charge_Limit"
    | "Other_Country"
    | "Unknown";

  /**
   * Updates 'Send Marketing Information' flag on web interface
   */
  marketingAccepted?: boolean;

  /**
   * The timestamp of account creation
   * Format: date-time
   * Example: 2023-03-10T18:07:52.534Z
   */
  creationTime?: string;
}

export default SignupInfoResource;
