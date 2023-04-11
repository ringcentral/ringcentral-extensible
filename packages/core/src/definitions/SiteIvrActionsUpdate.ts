import SiteIVRActionsExtensionInfoUpdate from './SiteIVRActionsExtensionInfoUpdate';

/**
 * Keys handling settings
*/
interface SiteIvrActionsUpdate {
  /**
   */
  input?: ('Star' | 'Hash' | 'NoInput' | '0');

  /**
   * Key handling action:
 *  - Repeat - repeat menu greeting, for Star and Hash only;
 *  - ReturnToRoot - return to root IVR menu, for Star and Hash only;
 *  - ReturnToPrevious - return to previous IVR menu, for Star and Hash only;
 *  - Connect - connect to specific extension, for NoInput and "0" (zero) only;
 *  - Disconnect - end call, for NoInput only.
   */
  action?: ('Repeat' | 'ReturnToRoot' | 'ReturnToPrevious' | 'ReturnToTopLevelMenu' | 'Connect' | 'ConnectToOperator' | 'Disconnect' | 'DoNothing');

  /**
   */
  extension?: SiteIVRActionsExtensionInfoUpdate;
}

export default SiteIvrActionsUpdate;
