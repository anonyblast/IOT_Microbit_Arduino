// Códigos desenvolvidos através da programação em blocos na plataforma Micro-bit

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.EigthNote)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MES_ALERT_EVT_DISPLAY_TOAST, function () {
    music.playMelody("C D E F G A B C5 C D E F G A B C5", 100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello, World!")
})
basic.showNumber(2)
basic.forever(function () {
	
})