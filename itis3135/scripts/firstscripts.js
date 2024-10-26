document.getElementById("date").innerHTML = Date();

function responseText(event) {
    event.preventDefault();
    let response = "SK Enterprises welcomes you, "
            + document.getElementById("name").value
            +"!! We're glad you are doing "
            + document.getElementById("feeling") .value +"!!";
    document.getElementById("response").innerHTML = response;
}

function polygon(event) {
    event.preventDefault();
    let number = document.getElementById("number").value, polygonName = "";
    number = Math.round(Math.abs(number));
    if (number == 0) {
        polygonName = "There is no polygon with 0 sides";
    } else if (number == 1) {
        polygonName = "Henagon";
    } else if (number == 2) {
        polygonName = "Digon";
    } else if (number == 3) {
        polygonName = "Trigon";
    } else if (number == 4) {
        polygonName = "Tetragon";
    } else if (number == 5) {
        polygonName = "Pentagon";
    } else if (number == 6) {
        polygonName = "Hexagon";
    } else if (number == 7) {
        polygonName = "Heptagon";
    } else if (number == 8) {
        polygonName = "Octogon";
    } else if (number == 9) {
        polygonName = "Enneagon";
    } else if (number == 10) {
        polygonName = "Decagon";
    } else {
        polygonName = "Please follow the directions";
    }
    alert(polygonName);
}
function namePicker(event) {
    event.preventDefault();
    const koalaName = ["Ozzy", "Jeff", "Koa", "Blinky"];
    alert(koalaName[Math.floor(Math.random() * 4)]);
}
function typePicker(event) {
    event.preventDefault();
    const koalaType = ["Brown Koala", "Gray Koala", "Gray-Brown Koala"];
    alert(koalaType[Math.floor(Math.random() * 3)]);
}
function bearPicker(event) {
    event.preventDefault();
    const bearType = ["Brown Bear", "Polar Bear", "Black Bear", "Panda Bear"];
    alert(bearType[Math.floor(Math.random() * 4)]);
}
function mpicker(event) {
    event.preventDefault();
    const mType = ["Sugar Glider", "Opossums", "Wallaby", "Kangaroo"];
    alert(mType[Math.floor(Math.random() * 4)]);
}