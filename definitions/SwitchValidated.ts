import ValidationError from './ValidationError'

class SwitchValidated
{
    /// <summary>
    /// Internal identifier of a switch
    /// </summary>
    id: string

    /// <summary>
    /// Unique identifier of a network switch
    /// </summary>
    chassisId: string

    /// <summary>
    /// Validation result status
    /// Enum: Valid, Invalid
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    errors: ValidationError[]
}

export default SwitchValidated