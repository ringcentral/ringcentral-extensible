/* eslint-env jest */
import RestClient from '../src/index'

describe('authorize', () => {
  test('password flow', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    const tokenInfo = await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    expect(tokenInfo).not.toBeNull()
    expect(tokenInfo.access_token).not.toBeNull()
  })
  test('refresh', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    const _tokenInfo = await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const tokenInfo = await rc.refresh()
    expect(tokenInfo).not.toBeNull()
    expect(tokenInfo.access_token).not.toBeNull()
    expect(tokenInfo.access_token).not.toEqual(_tokenInfo.access_token)
  })
})
