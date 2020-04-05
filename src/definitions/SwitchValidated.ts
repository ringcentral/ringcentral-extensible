import ValidationError from './ValidationError'

class SwitchValidated
{
  /**
   * Internal identifier of a switch
   */
  id?: string

  /**
   * Unique identifier of a network switch
   */
  chassisId?: string

  /**
   * Validation result status
   * Enum: Valid, Invalid
   */
  status?: string

  /**
   */
  errors?: ValidationError[]
}

export default SwitchValidated
