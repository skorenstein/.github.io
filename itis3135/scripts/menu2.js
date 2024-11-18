document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("scripts/menu2.json")
        .then(response => response.json())
        .then(data => {
            // Set header text
            const headerTextElement = document.getElementById("header-text");
            headerTextElement.textContent = data.headerText;
            
            // Create dropdown container
            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown");

            // Create dropdown button
            const dropdownButton = document.createElement("button");
            dropdownButton.classList.add("dropbtn");
            dropdownButton.textContent = "Exercises ⇓"; // Dropdown button label
            dropdown.appendChild(dropdownButton);

            // Create dropdown content
            const dropdownContent = document.createElement("div");
            dropdownContent.classList.add("dropdown-content");
            
            data.forEach(item => {
                // Skip headerText in the JSON data
                if (!item.name || !item.url) return;
                
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                
                // Append menu item to the dropdown content
                dropdownContent.appendChild(menuItem);
            });

            // Append dropdown content to dropdown container
            dropdown.appendChild(dropdownContent);

            // Append dropdown to the menu container
            const menuContainer = document.getElementById("menu-container");
            menuContainer.appendChild(dropdown);
        })
        .catch(error => console.error("Error fetching menu:", error));
});
