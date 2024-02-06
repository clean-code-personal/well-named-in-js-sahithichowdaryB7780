function testFormatColorCoding() {
    const actualOutput = formatColorCoding();
    const manual = `Color Coding:
[Pair Number: 1] Major Color: WHITE, Minor Color: BLUE
[Pair Number: 2] Major Color: WHITE, Minor Color: ORANGE
[Pair Number: 3] Major Color: WHITE, Minor Color: GREEN
[Pair Number: 4] Major Color: WHITE, Minor Color: BROWN
[Pair Number: 5] Major Color: WHITE, Minor Color: SLATE
[Pair Number: 6] Major Color: RED, Minor Color: BLUE
[Pair Number: 7] Major Color: RED, Minor Color: ORANGE
[Pair Number: 8] Major Color: RED, Minor Color: GREEN
[Pair Number: 9] Major Color: RED, Minor Color: BROWN
[Pair Number: 10] Major Color: RED, Minor Color: SLATE
[Pair Number: 11] Major Color: BLACK, Minor Color: BLUE
[Pair Number: 12] Major Color: BLACK, Minor Color: ORANGE
[Pair Number: 13] Major Color: BLACK, Minor Color: GREEN
[Pair Number: 14] Major Color: BLACK, Minor Color: BROWN
[Pair Number: 15] Major Color: BLACK, Minor Color: SLATE
[Pair Number: 16] Major Color: YELLOW, Minor Color: BLUE
[Pair Number: 17] Major Color: YELLOW, Minor Color: ORANGE
[Pair Number: 18] Major Color: YELLOW, Minor Color: GREEN
[Pair Number: 19] Major Color: YELLOW, Minor Color: BROWN
[Pair Number: 20] Major Color: YELLOW, Minor Color: SLATE
[Pair Number: 21] Major Color: VIOLET, Minor Color: BLUE
[Pair Number: 22] Major Color: VIOLET, Minor Color: ORANGE
[Pair Number: 23] Major Color: VIOLET, Minor Color: GREEN
[Pair Number: 24] Major Color: VIOLET, Minor Color: BROWN
[Pair Number: 25] Major Color: VIOLET, Minor Color: SLATE`;
    if (actualOutput === manual) {
        console.log("Test Passed! The function produces the expected output.");
    } else {
        console.error("Test Failed! The function does not produce the expected output.");
    }
    console.log("Manual:");
    console.log(manual);
    console.log("Actual Output:");
    console.log(actualOutput);
}
testFormatColorCoding();
