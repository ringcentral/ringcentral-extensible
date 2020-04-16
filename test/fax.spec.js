/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import CreateFaxMessageRequest from '../src/definitions/CreateFaxMessageRequest'
import Attachment from '../src/definitions/Attachment'

jest.setTimeout(16000)

describe('fax', () => {
  test('send fax', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const createFaxMessageRequest = new CreateFaxMessageRequest()
    createFaxMessageRequest.to = [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }]
    const attachment1 = new Attachment()
    attachment1.filename = 'text.txt'
    attachment1.content = 'hello world'
    attachment1.contentType = 'text/plain'
    const attachment2 = new Attachment()
    attachment2.filename = 'text.png'
    attachment2.content = fs.createReadStream(path.join(__dirname, 'test.png'))
    attachment2.contentType = 'image/png'
    createFaxMessageRequest.attachments = [attachment1, attachment2]
    const messageInfo = await rc.restapi().account().extension().fax().post(createFaxMessageRequest)
    expect(messageInfo).not.toBeUndefined()
    expect(messageInfo.id).not.toBeUndefined()
  })
})
