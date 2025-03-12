import SmsCampaignInfo from "./SmsCampaignInfo.js";
import SmsBrandInfo from "./SmsBrandInfo.js";

interface SmsConfigurationResource {
  /**
   * Internal identifier of a phone number
   */
  phoneNumberId?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format
   * Example: +18661234567
   */
  phoneNumber?: string;

  /** */
  smsCampaignInfo?: SmsCampaignInfo;

  /** */
  smsBrandInfo?: SmsBrandInfo;
}

export default SmsConfigurationResource;
