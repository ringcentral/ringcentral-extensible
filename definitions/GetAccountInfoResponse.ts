import GetExtensionInfoResponse from './GetExtensionInfoResponse'
import ServiceInfo from './ServiceInfo'
import SignupInfoResource from './SignupInfoResource'
import AccountStatusInfo from './AccountStatusInfo'
import RegionalSettings from './RegionalSettings'
import AccountLimits from './AccountLimits'

class GetAccountInfoResponse
{
    /// <summary>
    /// Internal identifier of an account
    /// </summary>
    id: number

    /// <summary>
    /// Canonical URI of an account
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of an account in the billing system
    /// </summary>
    bsid: string

    /// <summary>
    /// Main phone number of the current account
    /// </summary>
    mainNumber: string

    /// <summary>
    /// Operator's extension information. This extension will receive all calls and messages intended for the operator
    /// </summary>
    operator: GetExtensionInfoResponse

    /// <summary>
    /// Additional account identifier, developed and applied by the client
    /// </summary>
    partnerId: string

    /// <summary>
    /// Account service information, including brand, service plan and billing plan
    /// </summary>
    serviceInfo: ServiceInfo

    /// <summary>
    /// Specifies account configuration wizard state (web service setup)
    /// Default: NotStarted
    /// Enum: NotStarted, Incomplete, Completed
    /// </summary>
    setupWizardState: string

    /// <summary>
    /// Account sign up data
    /// </summary>
    signupInfo: SignupInfoResource

    /// <summary>
    /// Status of the current account
    /// Enum: Initial, Confirmed, Unconfirmed, Disabled
    /// </summary>
    status: string

    /// <summary>
    /// Status information (reason, comment, lifetime). Returned for 'Disabled' status only
    /// </summary>
    statusInfo: AccountStatusInfo

    /// <summary>
    /// Account level region data (web service Auto-Receptionist settings)
    /// </summary>
    regionalSettings: RegionalSettings

    /// <summary>
    /// Specifies whether an account is included into any federation of accounts or not
    /// </summary>
    federated: boolean

    /// <summary>
    /// If outbound call prefix is not specified, or set to null (0), then the parameter is not returned; the supported value range is 2-9
    /// </summary>
    outboundCallPrefix: number

    /// <summary>
    /// Customer facing identifier. Returned for accounts with the turned off PBX features. Equals to main company number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (without '+' sign)format
    /// </summary>
    cfid: string

    /// <summary>
    /// Limits which are effective for the account
    /// </summary>
    limits: AccountLimits
}

export default GetAccountInfoResponse