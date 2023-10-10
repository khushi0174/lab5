
// Get references to the button and images
const scaleButton = document.getElementById("scaleButton");
const scale1 = document.getElementById("svgImage");
const scale2 = document.getElementById("rasterImage");
const scale = document.getElementById("scale");

// Add a click event listener to the button
scaleButton.addEventListener("click", function () {
    // Set the width of both images to 500px
    scale1.style.width = "325px";
    //   scale1.style.border = "2px solid black";
    scale2.style.height = "300px";
    //   scale2.style.border = "2px olid black";
    //   scale.style.maxHeight= "1000px" ;


});

