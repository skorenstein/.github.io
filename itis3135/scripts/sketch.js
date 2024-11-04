function setup() {
createCanvas(400, 400);

angleMode(DEGREES);

}

function draw() {
    background(0);

    let leftX = 150;
    let leftY = 200;
    
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

    push();
    translate(leftX, leftY)
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25)
    pop();


    let rightX = 250;
    let rightY = 200;
    
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

    push();
    translate(rightX, rightY)
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25)
    pop();
}