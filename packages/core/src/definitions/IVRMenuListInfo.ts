interface IVRMenuListInfo {
  /**
   * Internal identifier of an IVR Menu extension
   * Example: 7258440006
   */
  id?: string;

  /**
   * Link to an IVR Menu extension resource
   * Format: uri
   * Example: https://api-example.rincentral.com/restapi/v1.0/account/5936989006/ivr-menus/7258440006
   */
  uri?: string;

  /**
   * First name of an IVR Menu user
   * Example: IVR Menu 1001
   */
  name?: string;

  /**
   * Number of an IVR Menu extension
   * Example: 1001
   */
  extensionNumber?: string;
}

export default IVRMenuListInfo;
