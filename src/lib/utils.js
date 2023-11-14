import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatDistanceToNowStrict } from 'date-fns'
import { enUS } from 'date-fns/locale'

export const timeAgo = (date) => {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
    locale: enUS
  })
}

export const cn = (...args) => twMerge(clsx(...args))
