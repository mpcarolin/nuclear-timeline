import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { cssVar } from "@/utils/cssVar";
import { countries, countryCodes, getTestCount, nuclearTests } from "@/data/tests";

export type TBarChartProps = {
    year: number;
    className: string;
}

export const BarChart = ({ year, className }: TBarChartProps) => {
    return (
        <div className={className}>
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

