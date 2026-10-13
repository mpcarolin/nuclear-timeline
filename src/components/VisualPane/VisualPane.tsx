import type { TTimelineEvent } from "@/types/timeline";

import styles from "./VisualPane.module.css";
import "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { countries, countryCodes, getTestCount, getTotalTestsByYear, nuclearTests, totalTestsByYear } from "@/data/tests";

export type TVisualPaneProps = {
    className?: string;
    event?: TTimelineEvent
}

export const VisualPane = ({ className, event }: TVisualPaneProps) => {
    const year = event?.date.getFullYear()
    if (!year) return null

    return (
        <div className={`${className} ${styles.wrapper}`}>
            <div className={styles.chart}>
                <Line
                    data={{
                        labels: Object.keys(totalTestsByYear),
                        datasets: [
                            {
                                label: "Total Tests By Year",
                                data: getTotalTestsByYear(nuclearTests, year)
                            }
                        ]
                    }}
                />
            </div>
            <div className={styles.chart}>
                <Bar
                    data={{
                        labels: countries,
                        datasets: [
                            {
                                label: `Nuclear Weapon Tests in ${year}`,
                                data: countryCodes.map(code => getTestCount(nuclearTests, code, year))
                            },
                        ]
                    }}
                />
            </div>
        </div>
    );
}

