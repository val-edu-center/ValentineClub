import Parse from 'parse/dist/parse.min.js'
import * as scheduleMapper from '../utility/ScheduleMapper'

export const getAllSchedules = async () => {
    const query = new Parse.Query('Schedule')
    const results = await query.find()
    return results.map(schedule => scheduleMapper.mapScheduleParse(schedule))
}
export const saveSchedule = async (schedule) => {
    await schedule.parseObject.save()
    return scheduleMapper.mapScheduleParse(schedule.parseObject)
}

export const deleteSchedule = async (schedule) => {
    await schedule.file.destroy()
    await schedule.parseObject.destroy()
}