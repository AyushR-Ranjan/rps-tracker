function ScoreBoard () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA" + "=" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB" + "=" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + "=" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds Played" + "=" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    Rounds += 1
    ScoreBoard()
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    ScoreBoard()
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PB += 1
    Rounds += 1
    ScoreBoard()
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
    OLED.clear()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
reset()
