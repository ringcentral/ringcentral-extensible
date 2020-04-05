class LanguageInfo
{
    /// <summary>
    /// Internal identifier of a language
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a language
    /// </summary>
    uri: string

    /// <summary>
    /// Indicates whether a language is available as greeting language
    /// </summary>
    greeting: boolean

    /// <summary>
    /// Indicates whether a language is available as formatting locale
    /// </summary>
    formattingLocale: boolean

    /// <summary>
    /// Localization code of a language
    /// </summary>
    localeCode: string

    /// <summary>
    /// Country code according to the ISO standard, see [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)
    /// </summary>
    isoCode: string

    /// <summary>
    /// Official name of a language
    /// </summary>
    name: string

    /// <summary>
    /// Indicates whether a language is available as UI language
    /// </summary>
    ui: boolean
}

export default LanguageInfo