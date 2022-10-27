// TODO: Declare any global variables we need
let headsRoll = 0
let tailsRoll = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons
    this.getElementById('flip').addEventListener ('click', () {
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        let currentFlip = Math.round()
        // TODO: Update image and status message in the DOM
        if (currentFlip < 0.5) { 
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
    
            headsRoll += 1    
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

             tailsRoll += 1
         }

        // Update the scorboard

        // TODO: Calculate the total number of rolls/flips
         let total = headsRoll + tailsRoll
        // Make variables to track the percentages of heads and tails
         let percentHead = 0
         let percentTail = 0
        // TODO: Use the calculated total to calculate the percentages
         if (total > 0) {
            percentHead = Math.round ((headsRoll / total) * 100)
            percentTail = Math.round ((tailsRoll / total) * 100)
         }
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRoll
        document.getElementById('heads-percent').textContent = percentHead + "%"
        document.getElementById('tails').textContent = tailsRoll
        document.getElementById('tails-percent').textContent = percentTail + "%"
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
         document.getElementById('clear').addEventListener ('click', function() {
            headsRoll = 0
            tailsRoll = 0

            document.getElementById('message').textContent = "Lets Get Rolling"

            let total = headsRoll + tailsRoll

            let percentHead = 0
            let percentTail = 0

            if (total > 0) {
                percentHead = Math.round((headsRoll / total) * 100)
                percentTail = Math.round((tailsRoll / total) * 100)
         }
        // TODO: Update the scoreboard (same logic as in flip button click handler)
            document.getElementById('heads').textContent = headsRoll
            document.getElementById('heads-percent').textContent = percentHead + "%"
            document.getElementById('tails').textContent = tailsRoll
            document.getElementById('tails-percent').textContent = percentTail + "%"
        }