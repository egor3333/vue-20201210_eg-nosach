import { MeetupCover } from './MeetupCover.js'
import { MeetupDescription } from './MeetupDescription.js'
import { MeetupAgenda } from './MeetupAgenda.js'
import { MeetupInfo } from './MeetupInfo.js'
import { getMeetupCoverLink } from './data.js'

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <meetup-cover :title="meetup.title" :link="link" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description v-if="meetup.description" :description="meetup.description" />

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="dateTime" />
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  },

  computed: {
    link() { return getMeetupCoverLink(this.meetup) },
    dateTime() { return new Date(this.meetup.date) }
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  }
}
