class Attachment
{
    /// <summary>
    /// File name with extension, such as "example.png"
    /// </summary>
    fileName: string

    /// <summary>
    /// Binary content of the file
    /// </summary>
    bytes: Buffer | Blob

    /// <summary>
    /// Content tyle of the file, such as "image/png"
    /// </summary>
    contentType: string
}

export default Attachment