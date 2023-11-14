import { formatDistanceToNowStrict } from 'date-fns'
import { enUS } from 'date-fns/locale'

export const timeAgo = (date) => {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
    locale: enUS
  })
}
