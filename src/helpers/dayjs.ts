import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const djs = dayjs

djs.extend(relativeTime)

export default djs
