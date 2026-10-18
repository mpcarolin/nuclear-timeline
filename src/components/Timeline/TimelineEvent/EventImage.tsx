import type { TEventImage } from "@/types/timeline"

import styles from "./EventImage.module.css"

export const EventImage = ({ image }: { image: TEventImage }) => {
    return (
        <figure>
            <img
                src={image.src}
                className={styles.thumbnail}
            />
            <figcaption className="citation">
                {image.attribution}
            </figcaption>
        </figure>
    )
}

