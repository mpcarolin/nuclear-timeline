import styles from './Timeline.module.css'
import { events } from '@/data/events'
import { TimelineEvent } from './TimelineEvent/TimelineEvent';
import { type TListItemObserver } from '@/hooks/timeline/useActiveListItem';

export type TTimelineProps = {
    className?: string;
    active: string | null;
    observe: TListItemObserver;
}

export const Timeline = ({ className, active, observe }: TTimelineProps) => {
    return (
        <section className={`${className} ${styles.wrapper}`}>
            <h2>Timeline</h2>
            <ol className={styles.list}>
                {
                    events.map((event) => (
                        <TimelineEvent
                            event={event}
                            key={event.id}
                            active={active === event.id}
                            ref={(node) => observe(node, event)}
                        />
                    ))
                }
            </ol>
        </section>
    );
}

