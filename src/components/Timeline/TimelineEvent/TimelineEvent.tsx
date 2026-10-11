import type { Ref } from 'react'
import type { TTimelineEvent, TTimelineEventElement } from "@/types/timeline";

import styles from "./TimelineEvent.module.css"

export type TTimelineProps = {
    active?: boolean;
    event: TTimelineEvent;
    ref: Ref<TTimelineEventElement>
}

export const TimelineEvent = ({ event, active, ref, }: TTimelineProps) => {
    return (
        <li className={styles.event}>
            <div ref={ref} className={`${styles.eventText} ${active ? styles.activeEvent : ''}`}>
                <h3 className={styles.eventTitle}>
                    {event.date}: {event.title}
                </h3>
                <p className={styles.eventDescription}>
                    {event.description}
                </p>
            </div>
        </li>
    );
}
