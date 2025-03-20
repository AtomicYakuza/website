document.addEventListener("DOMContentLoaded", function () {
    const windows = ["work-window", "education-window", "skills-window", "contact-window", "additional-window", "guess-window", "console-window", "website-window", "consulting-window"];

    // Hide all windows except "Quick Actions"
    windows.forEach(windowId => {
        const windowElement = document.getElementById(windowId);
        if (windowElement) {
            windowElement.classList.add("hidden");
        }
    });

    // Make all windows draggable
    windows.concat(["quick-window"]).forEach(makeDraggable);
});

var highestZIndex = 10; // Keeps track of the highest z-index

function makeDraggable(windowId) {
    const windowElement = document.getElementById(windowId);
    if (!windowElement) return;

    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;
    const titleBar = windowElement.querySelector(".window-title");
    if (!titleBar) return;

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

function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.classList.add("hidden");
    }
}

function openAllResumeWindows() {
    ["work-window", "education-window", "skills-window", "additional-window"].forEach(openWindow);
}

function openAllContactWindows() {
    openWindow("contact-window");
}

function openAllProjectWindows() {
    ["guess-window", "website-window", "consulting-window"].forEach(openWindow);
}


document.addEventListener("DOMContentLoaded", function () {
    

    document.querySelectorAll(".window").forEach(win => {
        win.addEventListener("mousedown", function () {
            highestZIndex++;
            this.style.zIndex = highestZIndex; // Set the clicked window to the highest z-index
        });
    });
});