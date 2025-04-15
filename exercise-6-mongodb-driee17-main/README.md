# Exercise 06: MongoDB

## Student Information

### Name

Adrian B. Cueto

### Student Number

2020-02461

### Section

EF-1L

## Code Description

Implementation of MongoDB using JS and endpoints from Express.JS and Needle for POST requests.

Contents:

- _index.js_ - contains the server for passing GET and POST requests;
- _router.js_ - stores all the endpoints of the server;
- _controller.js_ - contains the logic and functionalities needed for processing requests. Is also used to access and modify the database;
- _request.js_ - simulates the requests needed to be processed and for testing the server.

## How to Use

1. Install node.js: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
2. Install MongoDB: https://www.mongodb.com/docs/manual/administration/install-community/
3. Install MongoDB Compass: https://www.mongodb.com/products/tools/compass
4. Open MongoDB Compass and create new connection with the following details:
   - URI: mongodb://localhost:27017
   - Name: Any name is applicable
5. Input this in the terminal inside the repository folder: `node index.js`
6. Wait until the terminal prints: `Server started at port 3000.`
7. Create new instance of terminal and input this: `node request.js`
8. The terminal should print the responses of the server depending on the requests inside `request.js`. Modify accordingly.
