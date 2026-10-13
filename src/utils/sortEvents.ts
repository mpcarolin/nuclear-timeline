import type { TTimelineEvent } from "@/types/timeline";

export const sortEvents = (events: TTimelineEvent[]) => {
    return events.toSorted((a, b) => a.date.getTime() - b.date.getTime());
}
