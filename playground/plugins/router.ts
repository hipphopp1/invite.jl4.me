import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((that: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  that.$router.options.scrollBehavior = (to: {hash: any }, from: any, savedPosition: any) => {
    if (to.hash) {
      if (to.hash === '#calendar-entry') {
        const data = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          'DTSTART:20240420T160000Z',
          'DTEND:20240421T010000Z',
          'SUMMARY:27+1 Party by Julian',
          'DESCRIPTION:27+1 Party by Julian',
          'LOCATION:Bornstraße 3, 20146 Hamburg',
          'END:VEVENT',
          'END:VCALENDAR'
        ].join('\n')
        const blob = new Blob([data], { type: 'text/calendar' })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = 'meeting.ics'
        link.click()

        URL.revokeObjectURL(url)
      } else {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 30
        }
      }
    }
  }
})
