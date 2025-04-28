let scores = [0, 0];
let currentPlayer = 0;
const winningScore = 10;

const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const message = document.getElementById("message");

rollBtn.addEventListener("click", () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    rollDice(roll);

    scores[currentPlayer] += roll;
    (currentPlayer === 0 ? score1 : score2).textContent = scores[currentPlayer];

    if (scores[currentPlayer] >= winningScore) {
        message.textContent = `🎉 Player ${currentPlayer + 1} Wins! 🎉`;
        rollBtn.disabled = true;
    } else {
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        message.textContent = `Player ${currentPlayer + 1}'s Turn`;
    }
});

// const rollDice = (random) => {
//     const rotations = {
//         1: 'rotateX(0deg) rotateY(0deg)',
//         2: 'rotateX(-90deg) rotateY(0deg)',
//         3: 'rotateX(0deg) rotateY(90deg)',
//         4: 'rotateX(0deg) rotateY(-90deg)',
//         5: 'rotateX(90deg) rotateY(0deg)',
//         6: 'rotateX(180deg) rotateY(0deg)',
//     };
//     dice.style.transform = rotations[random];
// };


const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}
resetBtn.addEventListener("click", () => {
    scores = [0, 0];
    currentPlayer = 0;
    score1.textContent = "0";
    score2.textContent = "0";
    message.textContent = "Player 1's Turn";
    rollBtn.disabled = false;
    dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
});




  