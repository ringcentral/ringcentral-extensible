/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import { CreateFaxMessageRequest, Attachment } from '../src/definitions'

jest.setTimeout(16000)

describe('batch get', () => {
  test('send fax', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const extensions = await rc.restapi().account().extension().list()
    expect(extensions.records?.length).toBeGreaterThan(1)
    const r = await rc.get(`/restapi/v1.0/account/~/extension/${extensions.records?.map(r => r.id).join(',')}/presence`)
    expect(r).not.toBeNull()
    expect(r.data).not.toBeNull()
    expect(r.data).toContain('--Boundary')
  })
})
