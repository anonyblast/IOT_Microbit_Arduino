input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
for (let índice = 0; índice <= 4; índice++) {
    basic.showNumber(índice)
}