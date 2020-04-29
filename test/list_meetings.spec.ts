/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(16000)

describe('list meetings', () => {
  test('default', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!!,
      server: process.env.RINGCENTRAL_SERVER_URL!!
    })
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const meetingList = await rc.restapi().account().extension().meeting().list()
    expect(meetingList).not.toBeUndefined()
    expect(meetingList.records).not.toBeUndefined()
  })
})
