/**
 * Direct number assignment in case the number pool is not supported
*/
interface PhoneNumberDefinitionDirectNumberWithReservationId {
    /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Phone number reservation ID. If provided, phoneNumber is also required
   */
  reservationId?: string;
}

export default PhoneNumberDefinitionDirectNumberWithReservationId;
