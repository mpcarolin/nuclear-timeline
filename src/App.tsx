import styles from './App.module.css'
import { Timeline } from '@/components/Timeline/Timeline'
import { VisualPane } from '@/components/VisualPane/VisualPane'
import { useActiveListItem } from '@/hooks/timeline/useActiveListItem'
import { events } from '@/data/events'

function App() {
  // TODO: this doesn't belong here, but VisualPane needs the active event. Maybe introduce an EventContext or something. 
  const { active, setActive, observe } = useActiveListItem()
  const activeEvent = events.find(event => event.id === active)
  return (
    <main>
      <h1>Nuclear Proliferation</h1>
      <div className={styles.wrapper}>
        <Timeline className={styles.timeline} active={active} observe={observe} onEventClick={setActive} />
        <VisualPane className={styles.visuals} event={activeEvent} />
      </div>
    </main>
  )
}

export default App
