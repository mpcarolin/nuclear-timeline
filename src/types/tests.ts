/**
 * The datasource's structure
 */
export type TTestRow = {
    entity: string;
    code: string;
    year: number;
    testCount: number;
}

/**
 * CHN, USA, etc.
 */
export type TCountryCode = string;

/**
 * Model for a given country's nuclear tests by year
 */
export type TNuclearTests = {
    entity: string;
    code: TCountryCode;
    testsByYear: Record<number, number>
};

export type TNuclearTestMap = Record<TCountryCode, TNuclearTests>
