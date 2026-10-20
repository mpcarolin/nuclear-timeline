import type { TTimelineEvent, TTimelineEventElement } from "@/types/timeline";

import { sortEvents } from "./sortEvents";

/**
 * Returns an intersection observer which tracks the events
 * in the timeline list, determines which are visible,
 * then calls setActive on the first visible event.
 */
export const buildEventObserver = (
    listEvents: Map<TTimelineEventElement, TTimelineEvent>,
    visibleListEvents: Set<TTimelineEvent>,
    setActive: (id: string) => void,
    options: IntersectionObserverInit
) => {
    return new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const event = listEvents.get(entry.target as TTimelineEventElement);
                if (!event) {
                    console.warn("Encountered intersection entry for element not in the tracked list.");
                    continue
                }
                if (entry.isIntersecting) {
                    event && visibleListEvents.add(event);
                } else {
                    event && visibleListEvents.delete(event);
                }
            }

            const first = sortEvents(Array.from(visibleListEvents))[0];
            first && setActive(first.id);
        },
        options
    )
}
