// import shapes file
const Shapes = require('/shapes');

// Testing the triangle shape to ensure it meets proper points
describe("Triangle", () => {
  it("should have correct points plotted for polygon, shape color, text content, and text color", () => {
    const triangle = new Shapes.Triangle("black", "SVG", "white");
    expect(triangle.render()).toContain('<polygon points="150, 18 282, 283 18, 283" fill="Orange"/>');
  });
});

// Testing the circle shape to ensure it meets proper points
describe("Circle", () => {
    it("should have correct center point and radius, shape color, text content, and text color", () => {
        const circle = new Shapes.Circle("green", "SVG", "orange");
        expect(circle.render()).toContain('<circle cx="150" cy="150" r="80" fill="Orange"/>');
    });
});

// Testing the square shape to ensure it meets proper points
describe("Square", () => {
  it("should have correct points plotted for polygon, shape color, text content, and text color", () => {
    const square = new Shapes.Square("blue", "SVG", "yellow");
    expect(square.render()).toContain('<rect width="300" height="300" fill="yellow"/>');
  });
});
