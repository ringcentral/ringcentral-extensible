// Opt-out record
class OptOutResponse {
  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format from which the recipient has opted out
   */
  from?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format which is opted out
   */
  to?: string;
}

export default OptOutResponse;
