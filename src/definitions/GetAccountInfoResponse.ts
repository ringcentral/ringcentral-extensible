import { GetExtensionInfoResponse, ServiceInfo, SignupInfoResource, AccountStatusInfo, RegionalSettings, AccountLimits } from '.'

class GetAccountInfoResponse {
  /**
   * Internal identifier of an account
   */
  id?: number

  /**
   * Canonical URI of an account
   */
  uri?: string

  /**
   * Internal identifier of an account in the billing system
   */
  bsid?: string

  /**
   * Main phone number of the current account
   */
  mainNumber?: string

  /**
   * Operator's extension information. This extension will receive all calls and messages intended for the operator
   */
  operator?: GetExtensionInfoResponse

  /**
   * Additional account identifier, developed and applied by the client
   */
  partnerId?: string

  /**
   * Account service information, including brand, service plan and billing plan
   */
  serviceInfo?: ServiceInfo

  /**
   * Specifies account configuration wizard state (web service setup)
   * Default: NotStarted
   */
  setupWizardState?: ('NotStarted' | 'Incomplete' | 'Completed')

  /**
   * Account sign up data
   */
  signupInfo?: SignupInfoResource

  /**
   * Status of the current account
   */
  status?: ('Initial' | 'Confirmed' | 'Unconfirmed' | 'Disabled')

  /**
   * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
   */
  statusInfo?: AccountStatusInfo

  /**
   * Account level region data (web service Auto-Receptionist settings)
   */
  regionalSettings?: RegionalSettings

  /**
   * Specifies whether an account is included into any federation of accounts or not
   */
  federated?: boolean

  /**
   * If outbound call prefix is not specified, or set to null (0), then the parameter is not returned; the supported value range is 2-9
   */
  outboundCallPrefix?: number

  /**
   * Customer facing identifier. Returned for accounts with the turned off PBX features. Equals to main company number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (without '+' sign)format
   */
  cfid?: string

  /**
   * Limits which are effective for the account
   */
  limits?: AccountLimits
}

export default GetAccountInfoResponse
