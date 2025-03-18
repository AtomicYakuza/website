document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-button");
    const startMenu = document.querySelector(".start-menu");

    if (startButton && startMenu) {
        startButton.addEventListener("click", function (event) {
            event.stopPropagation();
            startMenu.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
                startMenu.classList.add("hidden");
            }
        });
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