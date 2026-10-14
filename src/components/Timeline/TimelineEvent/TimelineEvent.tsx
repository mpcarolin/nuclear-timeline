import type { Ref } from 'react'
import type { TTimelineEvent, TTimelineEventElement } from "@/types/timeline";

import styles from "./TimelineEvent.module.css"

export type TTimelineProps = {
    active?: boolean;
    event: TTimelineEvent;
    ref: Ref<TTimelineEventElement>
    onClick: React.MouseEventHandler<HTMLLIElement>
}

export const TimelineEvent = ({ event, active, onClick, ref }: TTimelineProps) => {
    return (
        <li className={styles.event} onClick={onClick}>
            <div ref={ref} className={`${styles.eventText} ${active ? styles.activeEvent : ''}`}>
                <h3 className={styles.eventTitle}>
                    {event.date.toDateString()}: {event.title}
                </h3>
                <p className={styles.eventDescription}>
                    {event.description}
                </p>
                {
                    event.image && <img src={event.image} width={500} className={styles.thumbnail} />
                }
            </div>
        </li>
    );
}
