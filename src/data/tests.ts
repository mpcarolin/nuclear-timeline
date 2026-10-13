import type { TCountryCode, TNuclearTestMap, TTestRow } from "@/types/tests"
import nuclearTestsSource from "@sources/tests/nuclear-weapons-tests.json"

const toNuclearTests = (source: TTestRow[]) => {
    return source.reduce<TNuclearTestMap>(
        (acc, next) => ({
            ...acc,
            [next.code]: {
                code: next.code,
                entity: next.entity,
                testsByYear: {
                    ...acc[next.code]?.testsByYear,
                    [next.year]: next.testCount,
                }
            }
        }),
        {}
    )
}

export const getTotalTestsByYear = (map: TNuclearTestMap, max?: number) => {
    return Object.values(map).reduce<Record<number, number>>(
        (acc, next) => {
            for (const [year, count] of Object.entries(next.testsByYear)) {
                const yearNum = parseInt(year)
                if (max !== undefined && yearNum > max) continue
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
export const countryCodes = Object.keys(nuclearTests);
export const countries = countryCodes.map(code => nuclearTests[code].entity)

export const getTestCount = (map: TNuclearTestMap, country: TCountryCode, year: number): number => {
    const tests = map[country];
    return tests.testsByYear[year];
}

