export type TTestRow = {
    entity: string;
    code: string;
    year: number;
    testCount: number;
}

export type TCountryCode = string;
export type TNuclearTests = {
    entity: string;
    code: TCountryCode;
    years: Record<number, number>
};

export type TNuclearTestCountryMap = Record<TCountryCode, TNuclearTests>
