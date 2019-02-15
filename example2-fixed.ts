function countLines2(text?: (string | null)[]): number {
    let count = 0;
    if (text) {
        for (const line of text) {
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }

    return count;
}

let a2 = countLines2(['one', 'two', 'three']);
let b2 = countLines2(['hello', null, 'world']);
let c2 = countLines2();
