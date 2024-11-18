document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data for the footer
    fetch("scripts/menu3.json")
        .then(response => response.json())
        .then(data => {
            // Process JSON data
            const footerContainer = document.getElementById("footer-container");

            // Creating and appending links
            data.footer.nav.links.forEach(link => {
                const footerLink = document.createElement("a");
                footerLink.href = link.href;
                footerLink.textContent = link.text;
                footerContainer.appendChild(footerLink);
                footerContainer.appendChild(document.createTextNode(" ")); // Spacer
            });

            // Creating and appending paragraph with nested links
            const paragraph = document.createElement("p");
            paragraph.classList.add("built");
            paragraph.textContent = data.footer.nav.paragraph.text + " ";
            data.footer.nav.paragraph.links.forEach(link => {
                const paragraphLink = document.createElement("a");
                paragraphLink.href = link.href;
                paragraphLink.textContent = link.text;
                paragraph.appendChild(paragraphLink);
                paragraph.appendChild(document.createTextNode(", ")); // Spacer
            });
            paragraph.lastChild.textContent = ""; // Remove last comma and space
            footerContainer.appendChild(paragraph);

            // Creating and appending images
            data.footer.nav.images.forEach(img => {
                const imageLink = document.createElement("a");
                imageLink.href = img.href;
                const image = document.createElement("img");
                image.src = img.src;
                image.alt = img.alt;
                image.style = img.style;
                imageLink.appendChild(image);
                footerContainer.appendChild(imageLink);
                footerContainer.appendChild(document.createTextNode(" ")); // Spacer
            });
        })
        .catch(error => console.error("Error fetching footer data:", error));
});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}
