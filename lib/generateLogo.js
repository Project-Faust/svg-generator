const shapes = require("./shapes");

function generateLogo(data) {
    const { shape, imageColor, textContent, textColor } = data;

    let svgCreate;

    if (shape === "Triangle") {
        svgCreate = new shapes.Triangle(imageColor, textContent, textColor)
    } else if (shape === "Circle") {
        svgCreate = new shapes.Circle(imageColor, textContent, textColor)
    } else if (shape === "Square") {
        svgCreate = new shapes.Square(imageColor, textContent, textColor)
    }
    // console.log(svgCreate);
    return svgCreate;
}

module.exports = generateLogo;