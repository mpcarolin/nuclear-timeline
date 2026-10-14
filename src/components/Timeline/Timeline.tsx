import styles from './Timeline.module.css'
import { events } from '@/data/events'
import { TimelineEvent } from './TimelineEvent/TimelineEvent';
import { type TListItemObserver } from '@/hooks/timeline/useActiveListItem';

export type TTimelineProps = {
    className?: string;
    active: string | null;
    observe: TListItemObserver;
    onEventClick: (id: string) => void;
}

export const Timeline = ({ className, active, observe, onEventClick }: TTimelineProps) => {
    return (
        <section className={`${className} ${styles.wrapper}`}>
            <hgroup className={styles.header}>
                <h2>Timeline</h2>
                <p className={styles.subtitle}>
                    {events[0].date.getFullYear()} - {events[events.length - 1].date.getFullYear()}
                </p>
            </hgroup>
            <ol className={styles.list}>
                {
                    events.map((event) => (
                        <TimelineEvent
                            event={event}
                            key={event.id}
                            active={active === event.id}
                            ref={(node) => observe(node, event)}
                            onClick={() => onEventClick(event.id)}
                        />
                    ))
                }
            </ol>
            <cite className={styles.citation}>
                Source: <a href="https://ahf.nuclearmuseum.org/ahf/nuc-history/timeline/">Atomic Heritage Foundation</a>
            </cite>
        </section>
    );
}

