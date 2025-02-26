/* General Styles */
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    overflow: hidden;
    background-image: url('images/background.jpg'); /* Add background image */
    background-size: cover;
    background-position: center;
}

/* Home Page */
#home-page {
    text-align: center;
    animation: fadeIn 1s ease-in-out;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
    padding: 20px;
    border-radius: 10px;
}

#choices {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.choice {
    margin: 0 10px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.choice:hover {
    transform: scale(1.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.choice img {
    width: 120px;
    height: auto;
    border: 3px solid #333;
    border-radius: 10px;
}

/* Hidden Class */
.hidden {
    display: none;
}

/* Game Container */
#game-container {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    border: 3px solid #333;
    animation: fadeIn 1s ease-in-out;
}

/* Score and Lives Display */
#score, #lives {
    position: absolute;
    top: 10px;
    font-size: 18px;
    background: #f4f4f4;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 10;
}

#score {
    left: 10px;
}

#lives {
    right: 10px;
    color: red;
    font-weight: bold;
}

/* Trash Can */
#trash-can {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: url('images/trash-can.png') no-repeat center;
    background-size: cover;
}

/* Falling Item */
.falling-item {
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    background-size: cover;
    animation: fall linear;
}

@keyframes fall {
    from {
        top: -50px;
    }
    to {
        top: 100%;
    }
}

/* Fade-in Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}