let baseline = input.magneticForce(Dimension.Strength)
/**
 * This project can detect a magnet if it's near a Microbit
 */
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baseline) > 100) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
