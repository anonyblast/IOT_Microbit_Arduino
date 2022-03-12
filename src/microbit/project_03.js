input.onGesture(Gesture.Shake, function () {
    temperatura = input.temperature()
    if (temperatura > 30) {
        basic.showString("Quente")
    } else {
        if (temperatura < 16 && temperatura > 0) {
            basic.showString("Frio!")
        } else {
            basic.showString("Normal")
        }
    }
})
let temperatura = 0
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
}