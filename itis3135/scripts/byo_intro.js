const courses = document.getElementById("courses");
const addCourseBtn = document.getElementById("add-course-btn");
const formData = document.getElementById("form").innerHTML;

function fileValidation() {
    var fileInput = document.getElementById("image");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.png)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type, pelase upload a png or jpg");
        fileInput.value ="";
        return false;
    }
}
function addCourse() {
    const courses = document.getElementById("courses");
    const courseEntry = document.createElement("div");
    courseEntry.classList.add("course-entry");
    courseEntry.innerHTML = `
        <input type="text" placeholder="Enter class name">
        <button>Delete</button>
    `;
    const deleteBtn = courseEntry.querySelector("button");
    deleteBtn.addEventListener("click", function() {
        courses.removeChild(courseEntry);
    });
    courses.appendChild(courseEntry);
}

function displayForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    var image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);
    var imageText = "<img style=\"width: 50%; display:block; margin-left: auto; margin-right: auto;\" src=\"" + imageUrl + "\" >";

    const caption = document.getElementById("caption").value;
    const personalbackground = document.getElementById("personal").value;
    const professionalbackground = document.getElementById("professional").value;
    const academicbackground = document.getElementById("academic").value;
    const webdevbackground = document.getElementById("webdev").value;
    const primaryplatform = document.getElementById("pc").value;
    const courses = document.getElementById("courses").value;
    const funny = document.getElementById("funny").value;
    const anything = document.getElementById("anything").value;

    document.getElementById("form").innerHTML = `
    <h1>${name}'s ${mascot}</h1>
    ${imageText}
    <p style = "font-style: italic; text-align: center; margin-left: auto; margin-right: auto">${caption}</p>
    <p>Personal Background: ${personalbackground}</p>
      <p>Academic Background: ${academicbackground}</p>
      <p>Professional Background: ${professionalbackground}</p>
      <p>Background in Web Development: ${webdevbackground}</p>
      <p>Primary Computer Platform: ${primaryplatform}</p>
      <p>Courses I'm Taking: ${courses}</p>
      <p>Funny Thing: ${funny}</p>
      <p>Something Else: ${anything}</p>
      <input type="reset" value="Reset" onclick="resetForm()">
    `;
}

function resetForm() {
    document.getElementById("form").innerHTML = formData;
}

addCourseBtn.addEventListener("click", addCourse);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    displayForm();
});
