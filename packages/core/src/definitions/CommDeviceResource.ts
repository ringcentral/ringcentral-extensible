interface CommDeviceResource {
  /**
   * Internal identifier of a device
   * Required
   * Example: 5423543
   */
  id?: string;

  /**
   * Device name
   * Example: HP2
   */
  name?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
   */
  phoneNumber?: string;
}

export default CommDeviceResource;
