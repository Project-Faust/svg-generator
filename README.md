# SVG Generator

This project utilizes JavaScript alongside node.js packages to prompt the user for information and takes uses this input in a functional way to produce an image.

The Inquirer package is what allows the JavaScript functionality of prompting the user for information in the command line once the index file is run. This information is stored in a JavaScript object and is then passed into a function that creates the string that will ultimately be used by the SVG module to create an image in the browser.

In order to use this application, the user must install the required dependencies using 'npm i' or 'npm install' in the command line (the user may have to install some dependencies specifically, such as Inquirer version 8.x). Once dependencies are installed, the user may start the application by running index.js; he or she will then be prompted for input via inquirer in the command line interface, and, after all input is received, the resulting .SVG file will be saved in the examples folder. The .SVG image can then be viewed by opening the file in a browser window.

Link to example video: https://drive.google.com/file/d/127bK1CduqNabYO9KMCopcvAw6nIcDVxf/view
