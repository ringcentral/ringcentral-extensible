/**
 * Caller ID information
 */
interface CommFromResource {
  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
   * Required
   */
  phoneNumber?: string;

  /**
   * Caller name
   * Required
   */
  name?: string;
}

export default CommFromResource;
