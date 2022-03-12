input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    while (input.lightLevel() < 20) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})