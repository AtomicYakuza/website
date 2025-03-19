document.addEventListener("DOMContentLoaded", function () {
    const startMenu = document.getElementById("start-menu");
    const startButton = document.getElementById("start-button");

    if (startMenu && startButton) {
        startButton.addEventListener("click", function (event) {
            event.stopPropagation();
            startMenu.style.display = (startMenu.style.display === "block") ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!startMenu.contains(event.target) && event.target !== startButton) {
                startMenu.style.display = "none";
            }
        });
    } else {
        console.error("Start button or Start menu not found!");
    }
});


function updateClock() {
    const clockElement = document.querySelector(".clock");
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        clockElement.textContent = timeString;
    }
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", function () {
    const titleText = "Ivo's Portfolio 95";
    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            document.getElementById("menu-title").textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});