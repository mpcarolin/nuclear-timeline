import type { TTimelineEvent } from "@/types/timeline";

import trinity from "@/assets/trinity.png"
import littleboy from "@/assets/littleboy.jpg"
import { infinite } from "@/utils/infinite";

const nextInt = infinite();

export const events: TTimelineEvent[] = [
    {
        id: nextInt().toString(),
        date: new Date('07-16-1945'),
        title: "Trinity",
        description: "The first detonation of a nuclear weapon is conducted by the United States Army. Part of the Manhattan project, the test uses an implosion-design plutonium bomb.",
        image: trinity
    },
    {
        id: nextInt().toString(),
        date: new Date('08-06-1945'),
        title: "Hiroshima",
        description: "Atomic bomb \"Little Boy\" is dropped on Hiroshima, Japan by the United States military. It is the first instance of a nuclear weapon used in warfare",
        image: littleboy
    },
    {
        id: nextInt().toString(),
        date: new Date('08-06-1945'),
        title: "Nagasaki",
        description: "Atomic bomb \"Fat Man\" is dropped on Nagasaki, Japan by the United States military. The second atomic bomb ever used in warfare and also the last. It was larger than the one used in Hiroshima."
    },
    ...Array.from({ length: 55 }, (_, idx) => ({
        id: (2 + idx + 1).toString(),
        date: new Date(`08-06-${1945 + idx + 1}`),
        title: "Event",
        description: "Some event"
    }))
]

