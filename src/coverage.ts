export enum Cases {
    caseOne = 1,
    caseTwo = 2,
}

export function swichCases(input: Cases) {
    switch (input) {
        case Cases.caseOne:
            return 1;
        case Cases.caseTwo:
            return 2;
        default:
            assertNever(input, "This should never happen");
    }
}

function assertNever(_x: never, message: string): never {
    throw new Error(message);
}