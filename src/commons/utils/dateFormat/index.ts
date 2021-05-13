import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)

export const dateFormat = (date: string, format = "DD-MM-YYYY") => {
  return dayjs(date).locale("pt-br").format(format)
} 

export const dateTimeFormat = (date: Date, format = "DD-MM-YYYY HH:mm") => {
  return dayjs(date).tz('America/Sao_Paulo').locale("pt-br").format(format)
}


