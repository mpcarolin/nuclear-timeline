export type TCoordinate = {
    lat: number
    long: number
    name?: string
}

export type TEventImage = {
    src: string;
    attribution?: string;
}

export type TTimelineEvent = {
    id: string;
    date: Date;
    image?: TEventImage
    title: string;
    description: string;
    coord: TCoordinate;
}

export type TTimelineEventElement = HTMLLIElement
