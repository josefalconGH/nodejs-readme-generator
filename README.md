# nodejs-readme-generator

## Description

The `nodejs-readme-generator` is a command-line application designed to quickly generate personalized professional README files. Utilizing Node.js and the Inquirer package, it prompts the user for input and creates a structured README based on the responses.

The README file generated in the demo is located in the `dist` directory.

```md
nodejs-readme-generator
├── dist
├── node_modules
├── utils
│   ├── commonLicenses.json
│   └── generateMarkdown.js
├── index.js
├── package-lock.json
└── package.json
```
### License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Interactive command-line interface using Inquirer
- Includes Description, Installation, Usage, License, and more sections related to your project
- Automatically generates license badges and links based on user selection
- Handles conditional prompts for additional details like demo links, screenshots, and tests
- Supports the usage of unordered and ordered lists

## Mock-Up

The `nodejs-readme-generator` can be viewed at: https://github.com/josefalconGH/nodejs-readme-generator

### Demo

![*Command-Line-Run-Through*](*image location*)

## Learning Outcomes

- Understanding of Node.js and npm package management
- Experience with the Inquirer package for creating interactive CLI applications
- Skills in handling asynchronous operations in JavaScript
- Ability to generate Markdown content programmatically

## Usage

1. Clone the repository:
    ```bash
        git clone https://github.com/josefalcongh/nodejs-readme-generator.git
    ```
2. Navigate to the project directory:
    ```bash
        cd nodejs-readme-generator
    ```
3. Install the dependencies:
    ```bash
        npm install
    ```
4. Run the application:
    ```bash
        node index.js
    ```
