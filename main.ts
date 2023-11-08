input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    music.stopMelody(MelodyStopOptions.All)
    music.stopAllSounds()
    game.setScore(0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 8; index++) {
        A_button = randint(1, 3)
        if (A_button == 1) {
            basic.pause(500)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
            basic.showLeds(`
                # # # # .
                # . . . #
                # # # # .
                # . . . #
                # # # # .
                `)
            basic.clearScreen()
            basic.pause(1000)
        } else if (A_button == 2) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                # # # # #
                # . . . #
                `)
            basic.showLeds(`
                # # # # .
                # . . . #
                # # # # .
                # . . . #
                # # # # .
                `)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Eighth))
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.clearScreen()
            basic.pause(1000)
        } else if (A_button == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                # . . . #
                . # . # .
                # . . . #
                `)
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Eighth))
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Eighth))
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.clearScreen()
            basic.pause(1500)
        }
    }
    if (game.score() >= 4) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Yes)
    } else if (game.score() < 8) {
        game.gameOver()
    }
    basic.showNumber(game.score())
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    game.addScore(1)
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half) * 1.5), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.addScore(1)
    music.play(music.tonePlayable(185, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
})
let A_button = 0
basic.showString("PRESS A")
basic.forever(function () {
	
})
