const fs = require('fs');
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const SVG = require('svg.js');

const generateLogo = require('./lib/generateLogo.js');

const questions = [
    {
        name: 'shape',
        message: 'Would you like a triangle, circle, or square?',
        type: 'list',
        choices: [
            { name: 'Triangle', value: 'Triangle' },
            { name: 'Circle', value: 'Circle' },
            { name: 'Square', value: 'Square' }
        ]
    },
    {
        name: 'imageColor',
        message: 'What color do you want the shape to have? \n Enter a color name or hexadecimal value.',
        type: 'input',
        validate: function (input) {
            const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
            const isColorName = /^([a-z]+\s*)+$/i.test(input);
            if (isHexCode || isColorName) {
                return true;
            } else {
                return "Please enter a valid color name or hex code (e.g. #FFFFFF for white).";
            }
        }
    },
    {
        name: 'textContent',
        message: 'Enter 1 to 3 characters to create text that will appear inside your shape.',
        type: 'input',
        validate: function (input) {
            if (3 > input.length < 1) {
                return true;
            } else {
                return "Please enter no less than 3 and no more than 1 characters."
            }
        }
    },
    {
        name: 'textColor',
        message: 'What color do you want the text to have? \n Enter a color name or hexadecimal value.',
        type: 'input',
        validate: function (input) {
            const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
            const isColorName = /^([a-z]+\s*)+$/i.test(input);
            if (isHexCode || isColorName) {
                return true;
            } else {
                return "Please enter a valid color name or hex code (e.g. #FFFFFF for white).";
            }
        }
    }
]

async function shapePrompt() {
    try {
        const userInput = await inquirer.prompt(questions);
        const svgCreate = generateLogo(userInput);
        await writeToFile(svgCreate);
    } catch (err) {
        console.error(err);
    }

    // creates a file at a predetermined path with a modular file name (see counter increment)
    async function writeToFile(svgCreate) {
        const directory = "./examples";
        const fileName = "Generated Logo";
        const extension = "svg"
        let counter = 0;
        let filePath = `${directory}/${fileName}.${extension}`

        // checks to see if file already exists
        while (fs.existsSync(filePath)) {
            counter++;
            filePath = `${directory}/${fileName}` + `${counter}.${extension}`;
        }

        // creates file
        try {
            await writeFile(filePath, svgCreate);
            console.log(`Your logo has been created and has been saved to ${filePath}.`);
        } catch (err) {
            console.error(err);
        }
    };
};

shapePrompt();