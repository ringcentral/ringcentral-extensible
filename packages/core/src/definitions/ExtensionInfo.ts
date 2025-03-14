/**
 * Information on the extension, to which the phone number is assigned.
 * Returned only for the request of Account phone number list
 */
interface ExtensionInfo {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   * Format: uri
   */
  uri?: string;

  /**
   * Extension name
   */
  name?: string;

  /**
   * Extension short number
   */
  extensionNumber?: string;

  /**
   * For partner applications. Internal identifier of an extension
   *  created by partner. The RingCentral supports the mapping of accounts and
   *  stores the corresponding account ID/extension ID for each partner ID of
   *  a client application. In request URIs partner IDs are accepted instead
   *  of regular RingCentral native IDs as path parameters using `pid=XXX` clause.
   *  Though in response URIs contain the corresponding account IDs and extension
   *  IDs. In all request and response bodies these values are reflected via
   *  partnerId attributes of account and extension
   */
  partnerId?: string;
}

export default ExtensionInfo;
