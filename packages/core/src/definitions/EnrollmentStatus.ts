interface EnrollmentStatus {
  /**
   * Quality of the enrollment.
   * Example: Average
   */
  enrollmentQuality?: ('Poor' | 'Average' | 'Good' | 'High');

  /**
   * Status of the enrollment.
   * Required
   * Example: true
   */
  enrollmentComplete?: boolean;

  /**
   * Required
   * Example: JohnDoe
   */
  enrollmentId?: string;

  /**
   * Total speech duration of the enrollment in seconds.
   * Format: float
   * Example: 20.1
   */
  totalEnrollDuration?: number;

  /**
   * Total duration of the enrollment in seconds.
   * Required
   * Format: float
   * Example: 30.5
   */
  totalSpeechDuration?: number;
}

export default EnrollmentStatus;
