export type TCoordinate = {
    lat: number
    long: number
    name?: string
}

export type TTimelineEvent = {
    id: string;
    date: Date;
    image?: string;
    title: string;
    description: string;
    coord: TCoordinate;
}

export type TTimelineEventElement = HTMLDivElement
