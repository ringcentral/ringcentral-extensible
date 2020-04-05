class Attachment
{
    /**
     * File name with extension, such as "example.png"
     */
    fileName: string

    /**
     * Binary content of the file
     */
    bytes: Buffer | Blob

    /**
     * Content tyle of the file, such as "image/png"
     */
    contentType: string
}

export default Attachment