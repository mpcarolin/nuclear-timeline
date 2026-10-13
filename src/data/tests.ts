import type { TNuclearTestMap, TTestRow } from "@/types/tests"
import nuclearTestsSource from "@sources/tests/nuclear-weapons-tests.json"

const toNuclearTests = (source: TTestRow[]) => {
    return source.reduce<TNuclearTestMap>(
        (acc, next) => ({
            ...acc,
            [next.code]: {
                code: next.code,
                entity: next.entity,
                years: {
                    ...acc[next.code]?.years,
                    [next.year]: next.testCount,
                }
            }
        }),
        {}
    )
}

export const getTotalTestsByYear = (map: TNuclearTestMap) => {
    return Object.values(map).reduce<Record<number, number>>(
        (acc, next) => {
            for (const [year, count] of Object.entries(next.years)) {
                const yearNum = parseInt(year)
                if (acc[yearNum] === undefined) {
                    acc[yearNum] = 0
                }
                acc[yearNum] += count;
            }
            return acc;
        },
        {}
    )
}

export const nuclearTests = toNuclearTests(nuclearTestsSource);

export const totalTestsByYear = getTotalTestsByYear(nuclearTests);
