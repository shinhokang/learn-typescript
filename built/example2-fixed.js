function countLines2(text) {
    var count = 0;
    if (text) {
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var line = text_1[_i];
            if (line && line.length !== 0) {
                count = count + 1;
            }
        }
    }
    return count;
}
var a2 = countLines2(['one', 'two', 'three']);
var b2 = countLines2(['hello', null, 'world']);
var c2 = countLines2();
