import type { TTimelineEvent } from '@/types/timeline';

import styles from './Timeline.module.css'
import { TimelineEvent } from './TimelineEvent/TimelineEvent';
import { useActiveListItem } from '@/hooks/timeline/useActiveListItem';

export type TTimelineProps = {
    className?: string;
}

// just testing out some visuals, this will be props soon...
const events: TTimelineEvent[] = Array.from({ length: 100 }, (_, idx) => ({
    date: 1945 + idx,
    id: idx.toString(),
    title: "Trinity test",
    description: "First detonation of a nuclear weapon is conducted by the United States Army at 5:29am Mountain War Time on July 16th 1945. Part of the Manhattan project, the test was of an implosion-design plutonium bomb. "
}))

export const Timeline = ({ className }: TTimelineProps) => {
    const { active, observe } = useActiveListItem()

    return (
        <section className={`${className} ${styles.wrapper}`}>
            <h2>Timeline</h2>
            <ol className={styles.list}>
                {
                    events.map((event) => (
                        <TimelineEvent
                            event={event}
                            key={event.date}
                            active={active === event.id}
                            ref={(node) => observe(node, event)}
                        />
                    ))
                }
            </ol>
        </section>
    );
}

