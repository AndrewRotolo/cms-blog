# Andrew Rotolo's CMS Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A simple forum for discussing CMS (or anything really)

## Installation
No direct installation necessary for this software, but if using it locally, you must have node.js and MySQL installed on your system in addition to various dependencies (which can be installed via "npm install" in node.js)

## Usage
If running locally, add a .env file and fill out the details of your MySQL connection using the included .env.EXAMPLE file. Then, run "npm install" in node.js to install the necessary dependencies. Then run "npm start" to boot up a local server. From there, you can use the application at localhost:3001. If deploying it, follow the instructions for your chosen deployment method.

## Known Issues
-The application is still unfinished, so expect bugs and missing features
-Seed data isn't loading in properly
-Even if seed data is added manually, you will not be able to log into seeded user accounts. This is due to the application's password hashing being unable to deal with a stored, unhashed password.
-Many buttons do not work as IDs/classes have not yet been added to the frontend and synced up to the backend
-Frontend currently has no styling.

## License
Software provided under the MIT License. Please refer to the included license file for more details.
