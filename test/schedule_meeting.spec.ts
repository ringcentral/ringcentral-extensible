/* eslint-env jest */
import RestClient from '../src/index'
import { MeetingRequestResource, MeetingScheduleResource, TimezoneResource, HostInfoRequest } from '../src/definitions'

jest.setTimeout(16000)

describe('schedule meeting', () => {
  test('for myself', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!
    })
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!
    })

    let meetingsList = await rc.restapi().account().extension().meeting().list()
    const count = meetingsList.records!.length

    // schedule a meeting
    const meetingRequestResource = new MeetingRequestResource()
    meetingRequestResource.topic = 'test meeting'
    meetingRequestResource.meetingType = 'Scheduled'
    const meetingScheduleResource = new MeetingScheduleResource()
    meetingScheduleResource.startTime = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()
    meetingScheduleResource.durationInMinutes = 30
    const timezoneResource = new TimezoneResource()
    timezoneResource.id = '58'
    meetingScheduleResource.timeZone = timezoneResource
    meetingRequestResource.schedule = meetingScheduleResource
    const meetingResponseResource = await rc.restapi().account().extension().meeting().post(meetingRequestResource)
    meetingsList = await rc.restapi().account().extension().meeting().list()
    expect(meetingsList.records!.length).toBe(count + 1)

    // don't forget to clean up
    await rc.restapi().account().extension().meeting(meetingResponseResource.id).delete()
    meetingsList = await rc.restapi().account().extension().meeting().list()
    expect(meetingsList.records!.length).toBe(count)
  })

  test('for others', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!
    })
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!
    })
    const exts = await rc.restapi().account().extension().list()
    const ext102 = exts.records!.filter(ext => ext.extensionNumber === '102')[0]

    let meetingsList = await rc.restapi().account().extension().meeting().list()
    const count = meetingsList.records!.length

    // schedule a meeting
    const meetingRequestResource = new MeetingRequestResource()
    meetingRequestResource.topic = 'test meeting'
    meetingRequestResource.meetingType = 'Scheduled'
    const meetingScheduleResource = new MeetingScheduleResource()
    meetingScheduleResource.startTime = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toISOString()
    meetingScheduleResource.durationInMinutes = 30
    const timezoneResource = new TimezoneResource()
    timezoneResource.id = '58'
    meetingScheduleResource.timeZone = timezoneResource
    meetingRequestResource.schedule = meetingScheduleResource
    const hostInfoRequest = new HostInfoRequest()
    hostInfoRequest.id = ext102.id?.toString()
    meetingRequestResource.host = hostInfoRequest
    const meetingResponseResource = await rc.restapi().account().extension().meeting().post(meetingRequestResource)

    // don't forget to clean up
    meetingsList = await rc.restapi().account().extension().meeting().list()
    expect(meetingsList.records!.length).toBe(count + 1)
    await rc.restapi().account().extension().meeting(meetingResponseResource.id).delete()
    meetingsList = await rc.restapi().account().extension().meeting().list()
    expect(meetingsList.records!.length).toBe(count)
  })
})
