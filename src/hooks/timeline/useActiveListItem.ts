import type { TTimelineEvent, TTimelineEventElement } from '@/types/timeline';
import { sortEvents } from '@/utils/sortEvents';

import { useMemo, useRef, useState } from 'react';

export type TListItemObserver = (node: TTimelineEventElement | null, event: TTimelineEvent) => void
export type TActiveListItemResult = {
    /**
     * Starts observing a given list item for visibility
     */
    observe: TListItemObserver;

    /**
     * The id of the first event which is *completely* visible in the list
     */
    active: string | null;

    /**
     * Sets the active event and also scrolls it to the top of the list, smoothly.
     * Used for click handling...
     */
    setActive: (id: string) => void;
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
    const listEvents = useRef(new Map<TTimelineEventElement, TTimelineEvent>());
    const visibleListEvents = useRef(new Set<TTimelineEvent>());

    const observer = useMemo(() => {
        return new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const event = listEvents.current.get(entry.target as TTimelineEventElement);
                    if (!event) {
                        console.warn("Encountered intersection entry for element not in the tracked list.");
                        continue
                    }
                    if (entry.isIntersecting) {
                        event && visibleListEvents.current.add(event);
                    } else {
                        event && visibleListEvents.current.delete(event);
                    }
                }

                const first = sortEvents(Array.from(visibleListEvents.current))[0];
                first && setActive(first.id);
            },
            options
        )
    }, [listEvents]);

    const observe = (node: TTimelineEventElement | null, event: TTimelineEvent) => {
        if (node) {
            listEvents.current.set(node, event);
            observer.observe(node);
        }
    }

    return {
        active,

        setActive: (id: string) => {
            setActive(id);
            const entries = [...listEvents.current.entries()]
            const element = entries.find(([, event]) => event.id === id)?.[0];
            element?.scrollIntoView({
                block: "start",
                inline: "nearest",
                behavior: "smooth",
            });
        },

        observe
    }
}



