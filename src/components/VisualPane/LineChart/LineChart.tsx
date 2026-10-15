import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { cssVar } from "@/utils/cssVar";
import { events } from "@/data/events";
import { getTotalTestsByYear, nuclearTests, totalTestsByYear } from "@/data/tests";

export type TLineChartProps = {
    year: number;
    className: string;
}

const lastYear = events[events.length - 1].date.getFullYear()

export const LineChart = ({ year, className }: TLineChartProps) => {
    return (
        <div className={className}>
            <Line
                data={{
                    labels: Object
                        .keys(totalTestsByYear)
                        .filter(year => parseInt(year) <= lastYear),
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
