import type { TTimelineEvent } from '@/types/timeline';

import { useMemo, useRef, useState } from 'react';

export type TListItemObserver = (node: HTMLDivElement | null, event: TTimelineEvent) => void
export type TActiveListItemResult = {
    /**
     * Starts observing a given list item for visibility
     */
    observe: TListItemObserver;

    /**
     * The id of the first event which is *completely* visible in the list
     */
    active: string | null;
}

const DEFAULT_OPTIONS: IntersectionObserverInit = {
    threshold: 1.0
}

/**
 * Finds the first *visible* list item in the list (using intersection observer)
 */
export const useActiveListItem = ({
    options = DEFAULT_OPTIONS
}: { options?: IntersectionObserverInit } = {}
): TActiveListItemResult => {
    const [active, setActive] = useState<string | null>(null);
    const listEvents = useRef(new Map<HTMLDivElement, TTimelineEvent>());
    const visibleListEvents = useRef(new Set<TTimelineEvent>());

    const observer = useMemo(() => {
        return new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const event = listEvents.current.get(entry.target as HTMLDivElement);
                    if (!event) {
                        continue
                    }
                    if (entry.isIntersecting) {
                        event && visibleListEvents.current.add(event);
                    } else {
                        event && visibleListEvents.current.delete(event);
                    }
                }

                const first = Array.from(visibleListEvents.current).sort((a, b) => a.date - b.date)[0];
                first && setActive(first.id);
            },
            options
        )
    }, [listEvents]);

    const observe = (node: HTMLDivElement | null, event: TTimelineEvent) => {
        if (node) {
            listEvents.current.set(node, event);
            observer.observe(node);
        }
    }

    return {
        active,
        observe
    }
}



