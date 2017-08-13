var shapeStyle = document.getElementById("shape").style;
var startTime, endTime;
var waiting;

function initShapeValues() {
    shapeStyle.display = "none";
    shapeStyle.backgroundColor =
        "rgb(" + genRandomValue(200) + "," +
        genRandomValue(200) + "," +
        genRandomValue(200) + ")";
    shapeStyle.width =
        genRandomValue(100) + 100;
    shapeStyle.height = shapeStyle.width;
    if (genRandomValue(2) === 0) {
        shapeStyle.borderRadius =
            parseInt(shapeStyle.width, 10) / 2 + "px";
    } else
        shapeStyle.borderRadius = "0px";

    var headerHeight = document.
    getElementById("header").clientHeight;

    var headerWidth = document.
    getElementById("header").clientWidth;

    // shapeStyle.top = headerHeight + 
    //     window.innerHeight - parseInt(shapeStyle.height,10) -
    //     headerHeight + "px";

    // shapeStyle.left = window.innerWidth - 
    //     parseInt(shapeStyle.width,10) -1 + "px";

    shapeStyle.top = headerHeight + genRandomValue(
        window.innerHeight - parseInt(shapeStyle.height, 10) -
        headerHeight) + "px";

    shapeStyle.left = genRandomValue(window.innerWidth -
        parseInt(shapeStyle.width, 10)) - 1 + "px";
}

function genRandomValue(maxInRange) {
    return Math.floor(Math.random() * maxInRange);
}

function waitRandomTime() {
    waiting = true;
    var waitTime = genRandomValue(1000) + 500;
    setTimeout(showShape, waitTime);
}

function showShape() {
    initShapeValues();
    shapeStyle.display = "block";
    startTime = Date.now();
    waiting = false;
}

document.getElementById("startButton").onclick = function () {
    shapeStyle.position = "absolute";
    document.getElementsByTagName("p").item(0).innerHTML =
        "Reaction Time: ";
    waitRandomTime();
    shapeStyle.display = "block";
    this.parentElement.removeChild(this);
}

document.getElementById("shape").onclick = function () {
    if(!waiting)
    {
        endTime = Date.now();
        document.getElementsByTagName("p").item(0).innerHTML =
            "Reaction Time: " + ((endTime - startTime)/1000) + "s";
            waitRandomTime();
    }
}        