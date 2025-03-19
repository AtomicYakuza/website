document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("console-input").focus();
});

function handleCommand(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const inputField = document.getElementById("console-input");
        const command = inputField.value.trim().toLowerCase();
        const outputDiv = document.getElementById("console-output");

        // Append entered command to the output
        outputDiv.innerHTML += `<p>C:\\User\\Ivo&gt; ${command}</p>`;

        // Check if the command ends with ".exe"
        if (command.endsWith(".exe")) {
            // Remove ".exe" part for processing
            const executableName = command.slice(0, -4);  // Removes the last 4 characters (".exe")
            
            // Handle the commands
            switch (executableName) {
                case "work experience":
                    outputDiv.innerHTML += `<p>Launching Work Experience.exe</p>`;
                    openWindow("work-window");
                    break;
                case "education":
                    outputDiv.innerHTML += `<p>Launching Education.exe</p>`;
                    openWindow("education-window");
                    break;
                case "skills":
                    outputDiv.innerHTML += `<p>Launching Skills.exe</p>`;
                    openWindow("skills-window");
                    break;
                case "leadership roles":
                    outputDiv.innerHTML += `<p>Launching Leadership roles.exe</p>`;
                    openWindow("additional-window");
                    break;
                case "contact":
                    outputDiv.innerHTML += `<p>Launching Contact.exe</p>`;
                    openWindow("contact-window");
                    break;
                case "console":
                    outputDiv.innerHTML += `<p>Can't launch this application via the console!</p>`;
                    break;
                default:
                    outputDiv.innerHTML += `<p>Unknown executable: ${command}</p>`;
            }
        } else {
            // Handle commands that do not end with ".exe"
            switch (command) {
                case "help":
                    outputDiv.innerHTML += `<p>Available commands: help, about, clear, time, whoami, .exe commands</p>`;
                    break;
                case "about":
                    outputDiv.innerHTML += `<p>Console.exe - A retro command-line interface.</p>`;
                    break;
                case "clear":
                    outputDiv.innerHTML = `<p>Console cleared.</p>`;
                    break;
                case "time":
                    outputDiv.innerHTML += `<p>${new Date().toLocaleTimeString()}</p>`;
                    break;
                case "whoami":
                    outputDiv.innerHTML += `<p>User: Ivo | OS: Win95 | Role: Developer</p>`;
                    break;
                default:
                    outputDiv.innerHTML += `<p>Unknown command: ${command}</p>`;
            }
        }

        // Auto-scroll to the latest output
        outputDiv.scrollTop = outputDiv.scrollHeight;

        // Clear input field
        inputField.value = "";
    }
}



function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.classList.remove("hidden");
        windowElement.style.display = "block";
        highestZIndex++;
        windowElement.style.zIndex = highestZIndex;
    } else {
        console.error(`Window with id '${windowId}' not found.`);
    }
}