input.onButtonPressed(Button.A, function () {
    record.setSampleRate(10000)
    basic.showIcon(IconNames.SmallSquare)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(10000)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
basic.forever(function () {
	
})
