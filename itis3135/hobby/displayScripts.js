function hideAllSections() {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.display = "none";
    });
}

function showSection(sectionId) {
    hideAllSections(); 
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = "block"; 
    }
}


function whatDisplay() {
    showSection("what");
}

function whoDisplay() {
    showSection("who");
}

function whyDisplay() {
    showSection("why");
}

function whenDisplay() {
    showSection("when");
}

function howDisplay() {
    showSection("how");
}

document.addEventListener("DOMContentLoaded", () => {
    showSection("what"); 
});
