export class Path {
    public static readonly Vote = '/';
    public static readonly Results = '/results';
}

interface StringArray {
    [index: string]: string;
}

export class AppData {
    static Candidates: StringArray = Object.freeze({
        A: 'A',
        B: 'B',
        C: 'C',
    });
}
