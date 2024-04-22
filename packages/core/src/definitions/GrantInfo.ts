import type ExtensionInfoGrants from './ExtensionInfoGrants';

interface GrantInfo {
  /**
   * Canonical URI of a grant
   * Format: uri
   */
  uri?: string;

  /**
   */
  extension?: ExtensionInfoGrants;

  /**
   * Specifies if picking up of other extensions' calls is allowed
   *  for the extension. If 'Presence' feature is disabled for the given extension,
   *  the flag is not returned
   */
  callPickup?: boolean;

  /**
   * Specifies if monitoring of other extensions' calls is allowed
   *  for the extension. If 'CallMonitoring' feature is disabled for the given
   *  extension, the flag is not returned
   */
  callMonitoring?: boolean;

  /**
   * Specifies whether the current extension is able to make or
   *  receive calls on behalf of the user referenced in extension object
   */
  callOnBehalfOf?: boolean;

  /**
   * Specifies whether the current extension can delegate a call
   *  to the user referenced in extension object
   */
  callDelegation?: boolean;

  /**
   * Specifies whether the current extension is allowed to call
   *  Paging Only group referenced to in extension object
   */
  groupPaging?: boolean;

  /**
   * Specifies whether the current extension is assigned as a Full-Access
   *  manager in the call queue referenced in extension object
   */
  callQueueSetup?: boolean;

  /**
   * Specifies whether the current extension is assigned as a Members-Only
   *  manager in the call queue referenced in extension object
   */
  callQueueMembersSetup?: boolean;

  /**
   * Specifies whether the current extension is assigned as a Messages Manager
   *  in the queue referenced in extension object
   */
  callQueueMessages?: boolean;

  /**
   * Specifies whether the current extension is granted *Forward All Calls (FAC)* permission
   */
  callQueueFacSetup?: boolean;

  /**
   * Specifies whether the user referenced in extension object is sharing voicemails
   *  with the current extension
   */
  sharedVoicemails?: boolean;
}

export default GrantInfo;
