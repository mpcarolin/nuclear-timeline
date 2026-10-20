import type { TTimelineEvent, TTimelineEventElement } from '@/types/timeline';

import { useEffect, useRef, useState } from 'react';
import { buildEventObserver } from '@/utils/buildEventObserver';

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
export type TUseActiveListItemParams = {
    /**
     * Optional initial id to start as the first active item
     */
    initId?: string;
    options?: IntersectionObserverInit
}

const DEFAULT_OPTIONS: IntersectionObserverInit = {
    threshold: 0.5
}

/**
 * Finds the first *visible* list item in the list (using intersection observer)
 */
export const useActiveListItem = ({
    initId,
    options = DEFAULT_OPTIONS
}: TUseActiveListItemParams = {}): TActiveListItemResult => {
    const [active, setActive] = useState<string | null>(initId ?? null);
    const listEventsRef = useRef(new Map<TTimelineEventElement, TTimelineEvent>());
    const visibleListEventsRef = useRef(new Set<TTimelineEvent>());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = buildEventObserver(
            listEventsRef.current,
            visibleListEventsRef.current,
            setActive,
            options
        );

        return () => {
            observerRef.current?.disconnect();
        }
    }, [listEventsRef, visibleListEventsRef, setActive, options]);


    const observe = (node: TTimelineEventElement | null, event: TTimelineEvent) => {
        if (node) {
            listEventsRef.current.set(node, event);
            observerRef.current?.observe(node);
        }
    }

    return {
        active,

        setActive: (id: string) => {
            setActive(id);
            const entries = [...listEventsRef.current.entries()]
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



