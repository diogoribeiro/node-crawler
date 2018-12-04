## List of tools used
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [EJS](http://ejs.co/)
- [nodemon](https://github.com/remy/nodemon/)
- [eslint](https://eslint.org/)
- [scrapeIt](https://github.com/IonicaBizau/scrape-it)
- [sanitize-html](https://github.com/punkave/sanitize-html#readme)
- [carousel](https://github.com/kenwheeler/slick)

## How to run
First of all, you need Node.js installed. [Download Node.js here](https://nodejs.org/en/download/)

After you have installed node you need to install the dependencies:

`npm install` - run this command inside the project's root folder.

Now you can run it in two ways:
1. `npm start` - this is going to execute the start command inside `scripts` section on `package.json`. This command is using nodemon. It's a tool that helps develop Node.js applications by automatically restarting the node application when file changes in the directory are detected. It's is ideal for the development environment.

2. `node app/server.js` - this is going to execute the server.js script directly. It's ideal for the production environment.
