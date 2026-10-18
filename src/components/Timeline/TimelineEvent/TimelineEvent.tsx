import type { Ref } from 'react'
import type { TTimelineEvent, TTimelineEventElement } from "@/types/timeline";

import styles from "./TimelineEvent.module.css"

export type TTimelineProps = {
    active?: boolean;
    event: TTimelineEvent;
    ref: Ref<TTimelineEventElement>
    onClick: React.MouseEventHandler<HTMLLIElement>
}

const formatDate = (date: Date) => {
    const fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long" })
    return fmt.format(date)
}

export const TimelineEvent = ({ event, active, onClick, ref }: TTimelineProps) => {
    return (
        <li className={styles.event} onClick={onClick} ref={ref}>
            <div className={`${styles.eventText} ${active ? styles.activeEvent : ''}`}>
                <h3 className={styles.eventTitle}>
                    {formatDate(event.date)}: {event.title}
                </h3>
                <p className={styles.eventDescription}>
                    {event.description}
                </p>
                {
                    event.image && (
                        <img
                            src={event.image.src}
                            className={styles.thumbnail}
                        />
                    )
                }
            </div>
        </li>
    );
}
