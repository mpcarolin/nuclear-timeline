import type { TTimelineEvent } from "@/types/timeline";

import styles from "./VisualPane.module.css";
import "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { cssVar } from "@/utils/cssVar";
import { countries, countryCodes, getTestCount, getTotalTestsByYear, nuclearTests, totalTestsByYear } from "@/data/tests";
import { useState } from "react";

export type TVisualPaneProps = {
    className?: string;
    event?: TTimelineEvent
}

type ViewOption = "line" | "bar" | "geo"

export const VisualPane = ({ className, event }: TVisualPaneProps) => {
    const [view, setView] = useState<ViewOption>("line");
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
            {
                showLine && (
                    <div className={styles.chart}>
                        <Line
                            data={{
                                labels: Object.keys(totalTestsByYear),
                                datasets: [
                                    {
                                        backgroundColor: cssVar("color-alert"),
                                        borderColor: cssVar("color-alert"),
                                        label: "Total Tests By Year",
                                        data: getTotalTestsByYear(nuclearTests, year)
                                    }
                                ]
                            }}
                        />
                    </div>
                )
            }
            {
                showBar && (
                    <div className={styles.chart}>
                        <Bar
                            data={{
                                labels: countries,
                                datasets: [
                                    {
                                        backgroundColor: cssVar("color-calm"),
                                        label: `Nuclear Weapon Tests in ${year}`,
                                        data: countryCodes.map(code => getTestCount(nuclearTests, code, year))
                                    },
                                ]
                            }}
                        />
                    </div>
                )
            }
        </div>
    );
}

