import { buildCommand, numberParser } from "@stricli/core";

export const subdirCommand = buildCommand({
    loader: async () => import("./impl"),
    parameters: {
        flags: {
            squareNum: {
                kind: "parsed",
                parse: numberParser,
                brief: "A number to square",
                optional: true
            },
            addNum: {
                kind: "parsed",
                parse: numberParser,
                brief: "A number to add to itself",
                optional: true
            },
        },
        positional: {
            kind: "tuple",
            parameters: [],
        },
    },
    docs: {
        brief: "Command in subdirectory",
    },
});
