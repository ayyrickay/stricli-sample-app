import type { LocalContext } from "../../context";

interface SubdirCommandFlags {
    squareNum?: number,
    addNum?: number
}

export default async function(this: LocalContext, { squareNum, addNum }: SubdirCommandFlags): Promise<void> {
    console.log("Hello, Developer Advocacy!")
    squareNum ? console.log(`${squareNum} squared is ${squareNum * squareNum}`) : ''
    addNum ? console.log(`The sum of ${addNum} and itself is ${addNum + addNum}`) : ''
}
