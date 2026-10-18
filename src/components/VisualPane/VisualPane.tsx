import type { TTimelineEvent } from "@/types/timeline";

import styles from "./VisualPane.module.css";
import { useState } from "react";
import { LineChart } from "./LineChart/LineChart";
import { BarChart } from "./BarChart/BarChart";
import { GeoViz } from "./GeoViz/GeoViz";

export type TVisualPaneProps = {
    className?: string;
    event?: TTimelineEvent
}

type ViewOption = "line" | "bar" | "geo"

export const VisualPane = ({ className, event }: TVisualPaneProps) => {
    const [view, setView] = useState<ViewOption>("geo");
    const showLine = view === "line";
    const showBar = view === "bar";
    const showGeo = view === "geo";

    const year = event?.date.getFullYear()
    if (!year) return null

    return (
        <div className={`${className} ${styles.wrapper}`}>
            <div className={styles.viewButtons}>
                <button
                    className={showLine ? styles.selectedButton : ""}
                    onClick={() => setView("line")}
                >
                    Tests by Year
                </button>
                <button
                    className={showBar ? styles.selectedButton : ""}
                    onClick={() => setView("bar")}
                >
                    Tests by Country
                </button>
                <button
                    className={showGeo ? styles.selectedButton : ""}
                    onClick={() => setView("geo")}
                >
                    Geo
                </button>
            </div>
            {showLine && <LineChart year={year} className={styles.chart} />}
            {showBar && <BarChart year={year} className={styles.chart} />}
            {showGeo && <GeoViz coord={event?.coord} />}
        </div>
    );
}

