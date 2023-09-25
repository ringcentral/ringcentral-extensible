/**
 * To be used for direct number assignment in case number pool is not supported
 */
interface PhoneNumberDefinitionDirectNumberWithReservationId {
  /**
   * Phone number ID
   * Required
   */
  phoneNumber?: string;

  /**
   * Phone number reservation ID
   */
  reservationId?: string;
}

export default PhoneNumberDefinitionDirectNumberWithReservationId;
