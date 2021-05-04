# wikimedia-task


## Features

- No transpilers, just vanilla javascript
- ES2017 latest features like Async/Await
- Uses [NPM](https://www.npmjs.com/)
- Node.js [Express](https://expressjs.com/) server
- Logging with [Morgan](https://github.com/expressjs/morgan)
- Uses [Nodemon](https://www.npmjs.com/package/nodemon) to update app automatically, without restarting the node application.
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
mysql CREATE DATABASE wikimedia_donation
```
https://dev.mysql.com/doc/refman/8.0/en/database-use.html

## Create Table in database
This can also be done with the MySQL Workbench, inside the JS itself, or through the CLI with the following:
```bash
CREATE TABLE `wikimedia_donation`.`donations` (
  `donationId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `firstName` VARCHAR(50) NULL,
  `lastName` VARCHAR(50) NULL,
  `streetAddress` VARCHAR(200) NULL,
  `city` VARCHAR(50) NULL,
  `state_region` VARCHAR(100) NULL,
  `country` VARCHAR(100) NULL,
  `postalCode` INT NULL,
  `phoneNumber` INT NULL,
  `email` VARCHAR(100) NULL,
  `preferredContact` VARCHAR(45) NULL,
  `preferredPayment` VARCHAR(45) NULL,
  `donationFrequency` VARCHAR(45) NULL,
  `donationAmount` FLOAT NULL,
  `comments` VARCHAR(1000) NULL,
  PRIMARY KEY (`userId`, `donationId`),
  UNIQUE INDEX `donationId_UNIQUE` (`donationId` ASC) VISIBLE);
```
Keep in mind, these column names and data types can be changed, but make sure to account for that in the code.

## Running Locally

```bash
npm run start
```

(localhost:8080)
