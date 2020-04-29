/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'

jest.setTimeout(16000)

describe('Profile image', () => {
  test('download', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!!,
      server: process.env.RINGCENTRAL_SERVER_URL!!
    })
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const buffer = await rc.restapi().account().extension().profileImage().list()
    expect(buffer.constructor.name).toBe('Buffer')
    fs.writeFileSync(path.join(__dirname, 'temp.png'), buffer)
  })
})
