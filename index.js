
let homeScore = Number(document.getElementById("home-score").textContent) 
let awayScore = Number(document.getElementById("away-score").textContent) 
console.log(homeScore+homeScore)

function addhome(points){
    homeScore += points
    document.getElementById("home-score").textContent = homeScore
}

function addaway(points){
    awayScore += points
    document.getElementById("away-score").textContent = awayScore
}



   
        let timer;
        let timeLeft = 2400; // Time in seconds (40 minutes)
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const timerDisplay = document.getElementById('timer');
        let isPaused = false;

        startButton.addEventListener('click', startGame);
        pauseButton.addEventListener('click', pauseGame);

        function startGame() {
            clearInterval(timer);
            isPaused = false;
            timer = setInterval(countdown, 1000);
        }

        function pauseGame() {
            if (!isPaused) {
                clearInterval(timer);
                isPaused = true;
            } else {
                isPaused = false;
                timer = setInterval(countdown, 1000);
            }
        }

        function countdown() {
            if (!isPaused) {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft === 0) {
                    clearInterval(timer);
                    alert('Full Time');
                }
            }
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = 
                String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0',0);
                }
                
               