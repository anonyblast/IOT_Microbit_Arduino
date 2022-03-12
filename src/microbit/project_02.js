input.onGesture(Gesture.Shake, function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
})
let temperatura = 0
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
}