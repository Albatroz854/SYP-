const homePage = document.getElementById('home-page');
const gameContainer = document.getElementById('game-container');
const trashCan = document.getElementById('trash-can');
const scoreValue = document.getElementById('score-value');
const livesValue = document.getElementById('lives-value');
const choices = document.querySelectorAll('.choice');

let selectedTrash = 'trash'; // Default trash type
let score = 0;
let lives = 3;
let gameInterval;

// Handle Trash Selection
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        selectedTrash = e.target.closest('.choice').dataset.type;
        startGame();
    });
});

// Start the Game
function startGame() {
    homePage.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    score = 0;
    lives = 3;
    scoreValue.textContent = score;
    updateLives();
    gameInterval = setInterval(generateFallingItem, 1000);
}

// Generate Falling Items
function generateFallingItem() {
    const item = document.createElement('div');
    item.classList.add('falling-item');

    // Randomly assign trash or non-trash
    const isTrash = Math.random() > 0.5;
    item.dataset.type = isTrash ? 'trash' : 'non-trash';
    item.style.left = `${Math.random() * (gameContainer.offsetWidth - 40)}px`;

    // Set the background image
    item.style.backgroundImage = isTrash
        ? "url('images/trash-item.png')"
        : "url('images/flower.png')";

    gameContainer.appendChild(item);

    // Falling Animation
    let itemInterval = setInterval(() => {
        const itemBounds = item.getBoundingClientRect();
        const trashCanBounds = trashCan.getBoundingClientRect();

        // Check if the item reaches the bottom
        if (itemBounds.top > gameContainer.offsetHeight) {
            clearInterval(itemInterval);
            item.remove();
        }

        // Check for collision with the trash can
        if (
            itemBounds.bottom >= trashCanBounds.top &&
            itemBounds.left < trashCanBounds.right &&
            itemBounds.right > trashCanBounds.left
        ) {
            clearInterval(itemInterval);
            handleCollision(item);
        }

        // Move the item down
        const currentTop = parseFloat(item.style.top) || 0;
        item.style.top = `${currentTop + 5}px`;
    }, 50);
}

// Handle Collision
function handleCollision(item) {
    if (item.dataset.type === selectedTrash) {
        score += 10;
    } else {
        lives -= 1;
        if (lives <= 0) {
            gameOver();
            return;
        }
    }

    scoreValue.textContent = score;
    updateLives();
    item.remove();
}

// Update Lives
function updateLives() {
    livesValue.textContent = '♥'.repeat(lives);
}

// Game Over
function gameOver() {
    clearInterval(gameInterval);
    alert('Game Over! Returning to home page...');
    resetGame();
}

// Reset Game
function resetGame() {
    document.querySelectorAll('.falling-item').forEach((item) => item.remove());
    gameContainer.classList.add('hidden');
    homePage.classList.remove('hidden');
}
