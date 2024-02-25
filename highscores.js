const scorecard = document.getElementById("scorecard");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

scorecard.innerHTML = highScores
  .map(score => {
    return `
      <div class="score-entry" onclick="toggleScoreDetails(this)">
        <div class="player-name">${score.name}</div>
        <div class="score-details">
          <div>Score: <span class="score">${score.score}</span></div>
          <!-- Add more details here if needed -->
        </div>
      </div>
    `;
  })
  .join(""); AV

function toggleScoreDetails(scoreEntry) {
  const details = scoreEntry.querySelector('.score-details');
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
