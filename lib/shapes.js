class Shape {
    constructor(textContent, textColor, imageColor) {
        this.imageColor = imageColor;
        this.textContent = textContent;
        this.textColor = textColor;
    }
};

class Triangle extends Shape {
    render() {
        return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
     </svg>`
    }
};

class Circle extends Shape {
    render() {
        return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="150" r="80" fill="${this.imageColor}" />
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
     </svg>`
    }
};

class Square extends Shape {
    render() {
        return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
     <polygon points "(60, 30) (180, 270) (300, 30)" fill="${this.imageColor}" />
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
     </svg>`
    }
};

module.exports = { Triangle, Circle, Square };