export type Identifier = {
    index: string,
    name: string,
    url: string
};

export type Collection = {
    count: number,
    results: [Identifier]
};