const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        name: 'shape',
        message: 'Would you like a triangle, circle, or square?',
        type: 'list',
        choices: [
            { name: 'Triangle', value: 'triangle' },
            { name: 'Circle', value: 'circle' },
            { name: 'Square', value: 'square' }
        ]
    },
    {
        name: 'imageColor',
        message: 'What color do you want the shape to have? \n Enter a color name or hexadecimal value.',
        type: 'input'
    },
    {
        name: 'textContent',
        message: 'Enter 1 to 3 characters to create text that will appear inside your shape.',
        type: 'input'
    },
    {
        name: 'textColor',
        message: 'What color do you want the text to have? \n Enter a color name or hexadecimal value.',
        type: 'input'
    }
]