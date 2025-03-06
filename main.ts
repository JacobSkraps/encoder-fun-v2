RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    Num += 0 - 7.5
    if (Num <= -1) {
        Num = 0
    }
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    Num += 0 + 0.1
    if (Num >= 256) {
        Num = 255
    }
})
let Num = 0
music.play(music.stringPlayable("- - C E B A B C5 ", 120), music.PlaybackMode.UntilDone)
RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0)
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # # # # #
    . # . # .
    `)
basic.showNumber(Num)
Num = 50
basic.forever(function () {
    basic.showNumber(Num)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    5000,
    0,
    Num,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
})
