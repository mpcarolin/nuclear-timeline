import { countries, countryCodes, getTestCount, nuclearTests } from "@/data/tests";

import "chart.js/auto"
import { Bar } from "react-chartjs-2"

export type TVisualPaneProps = {
    className?: string;
}

export const VisualPane = ({ className }: TVisualPaneProps) => {
    const currentYear = 1945
    return (
        <div className={className}>
            <p>Main visuals will go here</p>
            <Bar
                data={{
                    labels: countries,
                    datasets: [
                        {
                            label: `Nuclear Weapon Tests in ${currentYear}`,
                            data: countryCodes.map(code => getTestCount(nuclearTests, code, currentYear))
                        },
                    ]
                }}
            />
        </div>
    );
}

