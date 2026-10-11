import styles from './Timeline.module.css'

export type TTimelineProps = {
    className?: string;
}

// just testing out some visuals, this will be props soon...
const events = Array.from({ length: 100 }, (_, idx) => ({
    year: 1945 + idx,
    description: "Trinity test",
}))


export const Timeline = ({ className }: TTimelineProps) => {
    return (
        <section className={`${className} ${styles.wrapper}`}>
            <h2>Timeline</h2>
            <div className={styles.list}>
                {
                    events.map((event) => <p key={event.year}>{event.year} - {event.description}</p>)
                }
            </div>
        </section>
    );
}
