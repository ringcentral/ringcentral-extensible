/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import { CreateMMSMessage, Attachment } from '../src/definitions'

jest.setTimeout(16000)

describe('mms', () => {
  test('send mms', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const createMMSMessage = new CreateMMSMessage()
    createMMSMessage.from = { phoneNumber: process.env.RINGCENTRAL_USERNAME! }
    createMMSMessage.to = [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }]
    const attachment = new Attachment()
    attachment.filename = 'text.png'
    attachment.content = fs.createReadStream(path.join(__dirname, 'test.png'))
    attachment.contentType = 'image/png'
    createMMSMessage.attachments = [attachment]
    const messageInfo = await rc.restapi().account().extension().mms().post(createMMSMessage)
    expect(messageInfo).not.toBeUndefined()
    expect(messageInfo.id).not.toBeUndefined()
  })
})
