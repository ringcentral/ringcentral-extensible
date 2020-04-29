/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import { CreateFaxMessageRequest, Attachment } from '../src/definitions'

jest.setTimeout(16000)

describe('fax', () => {
  test('send fax', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!!,
      server: process.env.RINGCENTRAL_SERVER_URL!!
    })
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const faxMessages = await rc.restapi().account().extension().messageStore().list({ messageType: ['Fax'], direction: ['Inbound'], dateFrom: '2015-04-15T17:18:00.000Z' })
    const buffer = await rc.get(faxMessages.records?.[0].attachments?.[0].uri!, undefined, { responseType: 'arraybuffer' })
    fs.writeFileSync(path.join(__dirname, 'temp.pdf'), buffer)
  })
})
