import styles from './App.module.css'
import { Timeline } from './components/Timeline/Timeline'
import { VisualPane } from './components/VisualPane/VisualPane'

function App() {
  return (
    <main>
      <h1>Nuclear Proliferation</h1>
      <div className={styles.wrapper}>
        <Timeline className={styles.timeline} />
        <VisualPane className={styles.visuals} />
      </div>
    </main>
  )
}

export default App
