import styles from './App.module.css'
import { Timeline } from '@/components/Timeline/Timeline'
import { VisualPane } from '@/components/VisualPane/VisualPane'
import { useActiveListItem } from '@/hooks/timeline/useActiveListItem'
import { events } from '@/data/events'

function App() {
  const { ready, active, setActive, observe } = useActiveListItem({ initId: events[0].id })
  if (!ready) return null;

  const activeEvent = events.find(event => event.id === active)
  return (
    <main>
      <hgroup className={styles.heading}>
        <h1>Nuclear Proliferation</h1>
        <p>A tour through the bombings, tests, treaties, and close calls of the Nuclear Age</p>
      </hgroup>
      <div className={styles.wrapper}>
        <Timeline className={styles.timeline} active={active} observe={observe} onEventClick={setActive} />
        <VisualPane className={styles.visuals} event={activeEvent} />
      </div>
    </main>
  )
}

export default App
