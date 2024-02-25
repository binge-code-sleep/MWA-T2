const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// Disable save button initially
saveScoreBtn.disabled = true;

// Enable save button when username is provided
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const existingScoreIndex = highScores.findIndex(score => score.name === username.value);

    if (existingScoreIndex !== -1) {
        // If a high score already exists for the username, update the existing score
        highScores[existingScoreIndex].score = mostRecentScore;
    } else {
        // Otherwise, add a new high score
        const score = {
            score: mostRecentScore,
            name: username.value,
        };
        highScores.push(score);
    }

    // Sort the high scores and keep only the top MAX_HIGH_SCORES
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    // Save the updated high scores to localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Redirect to the index page
    window.location.assign('index.html');
};
