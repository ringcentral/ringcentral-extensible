/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import { CreateFaxMessageRequest, Attachment } from '../src/definitions'

jest.setTimeout(16000)

describe('list meetings', () => {
  test('default', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const meetingList = await rc.restapi().account().extension().meeting().list()
    expect(meetingList).not.toBeUndefined()
    expect(meetingList.records).not.toBeUndefined()
  })
})
