
const modal = document.getElementById("playerModal");
const modalName = document.getElementById("playerName");
const modalBio = document.getElementById("playerBio");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(playerName, playerBio) {
    modal.style.display = "block";
    modalName.textContent = playerName;
    modalBio.textContent = playerBio;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll(".player-name").forEach(playerNameElement => {
    playerNameElement.onclick = function() {
        const playerName = this.textContent;
        const playerBio = this.closest(".player").getAttribute("data-bio");
        openModal(playerName, playerBio);
    }
});

document.querySelectorAll(".player a").forEach(link => {
    link.onclick = function(event) {
        event.stopPropagation(); 
    }
});


const staffModal = document.getElementById("staffModal");
const staffName = document.getElementById("staffName");
const staffBio = document.getElementById("staffBio");
const staffImage = document.getElementById("staffImage");
const closeStaffBtn = staffModal.getElementsByClassName("close")[0];

function openStaffModal(name, bio, image) {
    staffModal.style.display = "block";
    staffName.textContent = name;
    staffBio.textContent = bio;
    staffImage.src = image;
}

closeStaffBtn.onclick = function() {
    staffModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === staffModal) {
        staffModal.style.display = "none";
    }
}

document.querySelectorAll(".staff-name").forEach(staffNameElement => {
    staffNameElement.onclick = function() {
        const staffName = this.textContent;
        const staffBio = this.closest(".staff-member").getAttribute("data-bio");
        const staffImageSrc = this.closest(".staff-member").getAttribute("data-image") || "path/to/placeholder.jpg";
        openStaffModal(staffName, staffBio, staffImageSrc);
    }
});

document.querySelectorAll(".staff-member a").forEach(link => {
    link.onclick = function(event) {
        event.stopPropagation();
    }
});
