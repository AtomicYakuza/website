document.addEventListener("DOMContentLoaded", function () {
    makeDraggable("work-window");
    makeDraggable("education-window");
    makeDraggable("skills-window");
    makeDraggable("contact-window");
    makeDraggable("additional-window")
    makeDraggable("guess-window")
});


function makeDraggable(windowId) {
    const windowElement = document.getElementById(windowId);
    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;
    
    const titleBar = windowElement.querySelector(".window-title");
    titleBar.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        offsetX = mouseX - e.clientX;
        offsetY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        windowElement.style.top = (windowElement.offsetTop - offsetY) + "px";
        windowElement.style.left = (windowElement.offsetLeft - offsetX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Function to close a window when clicking "X"
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = "none";
}

function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.classList.remove("hidden");
    }
}

function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.classList.add("hidden");
    }
}

function openAllResumeWindows() {
    const windows = ["work-window", "education-window", "skills-window", "additional-window"];

    windows.forEach(windowId => {
        const windowElement = document.getElementById(windowId);
        if (windowElement) {
            windowElement.classList.remove("hidden");
        }
    });
}

function openAllContactWindows() {
    const windows = ["contact-window"];

    windows.forEach(windowId => {
        const windowElement = document.getElementById(windowId);
        if (windowElement) {
            windowElement.classList.remove("hidden");
        }
    });
}


// function updateClock() {
//     const clockElement = document.querySelector(".clock");
//     if (clockElement) {
//         const now = new Date();
//         const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         clockElement.textContent = timeString;
//     }
// }
// setInterval(updateClock, 1000);
// updateClock();