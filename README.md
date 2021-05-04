# wikimedia-task


## Features

 - No transpilers, just vanilla javascript
 - ES2017 latest features like Async/Await
- Uses Babel as ES6-to-ES5 transpiler
- ES2017 latest features like Async/Await
- Uses [npm](https://www.npmjs.com/)
- Node.js Express server [Express](https://expressjs.com/)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Nodemon was used to update app automatically, without restarting the node application. [nodemon](https://www.npmjs.com/package/nodemon)
- MySQL database. [MySQL](https://dev.mysql.com/)

## Authors

- **Gary Hagen** - [GitHub](https://github.com/HagenGaryP)

## Requirements

- [Node v12+](https://nodejs.org/en/download/current/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# Getting Started

#### Clone the repo and make it yours:

```bash
git clone https://github.com/HagenGaryP/wikimedia-task.git
cd wikimedia-task
```

#### Install dependencies:
All node packages were installed globally on local machine that uses Visual Studio Code for development/code editing.
To install dependencies, inside your terminal, go to your project's directory and run "npm install".
```bash
npm install
```

## Create MySQL database
Database can be created through the MySQL Workbench, within the JS, or through the CLI.
Either create this exact DB or change the name in the package.json
```bash
mysql CREATE DATABASE wikimedia-task
```
https://dev.mysql.com/doc/refman/8.0/en/database-use.html


## Running Locally

```bash
npm run start
```

(localhost:8080)
