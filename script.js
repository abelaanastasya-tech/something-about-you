function goToPage(number) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number).classList.add("active");

    if (number === 3) {
        startTyping();
    }
}


function openEnvelope() {
    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    playMusic();

    setTimeout(() => {
        goToPage(3);
    }, 1000);
}


const music = document.getElementById("music");

function playMusic() {
    music.play().catch(error => {
        console.log("Musik gagal diputar:", error);
    });
}

function pauseMusic() {
    music.pause();
}


function startLoveRain() {
    goToPage(5);

    const container = document.getElementById("heartRain");

    const hearts = [
        "💗",
        "💕",
        "💖",
        "🩷",
        "♡",
        "♥"
    ];

    function createHeart() {
        const heart = document.createElement("div");

        heart.classList.add("rain-heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    createHeart();

    setInterval(createHeart, 180);
}


/* MESIN KETIK SURAT */

function startTyping() {

    const letter = document.querySelector("#page3 .letter");

    if (!letter) return;

    const elements = letter.querySelectorAll("h2, p");

    elements.forEach(element => {

        const text = element.textContent;

        element.textContent = "";
        element.style.visibility = "visible";

        let i = 0;

        function typeText() {

            if (i < text.length) {

                element.textContent += text.charAt(i);

                i++;

                setTimeout(typeText, 45);

            }
        }

        typeText();

    });
}