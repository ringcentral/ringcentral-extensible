interface NumberDetailsSpecialService {
    /**
   * The type of special service.
   * Example: NonEmergencyMedical
   */
  type?: ('Emergency' | 'DirectoryAssistance' | 'UpdateEmergencyAddress' | 'CustomerSupport' | 'NonEmergencyPolice' | 'NonEmergencyMedical' | 'TelecommunicationRelay' | 'Unsupported' | 'Supplementary' | 'Unknown');

  /**
   * Example: 116xxx
   */
  pattern?: string;
}

export default NumberDetailsSpecialService;
