import styles from "./TimelineEvent.module.css"
import type { TTimelineEvent } from "@/types/timeline";


export const TimelineEvent = ({ event }: { event: TTimelineEvent }) => {
    return (
        <li className={styles.event}>
            <div className={styles.eventText}>
                <h3 className={styles.eventTitle}>
                    {event.year}: {event.title}
                </h3>
                <p className={styles.eventDescription}>
                    {event.description}
                </p>
            </div>
        </li>
    );
}
