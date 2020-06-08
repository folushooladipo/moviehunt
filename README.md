# Welcome to MovieHunt!
MovieHunt is a modern web app that allows you to browse through movies and view their ratings, synopses, release years and so on. This enables you to make informed decisions on which ones you wish to see at a cinema, which ones you'll like to buy as DVD and which ones you'll rather not see.

## Table of Contents

  1. [Our Tech Stack](#our-tech-stack)
  1. [Installation and setup](#installation-and-setup)
  1. [Contributing](#contributing)
  1. [Licence](#license)

## Our Tech Stack

This project was built using modern technology tools. These include:
- [Node.js](https://nodejs.org/)- for running, compiling and serving the app.
- [Express.js](https://expressjs.com/)- for running an HTTP server for the app.
- [React](https://facebook.github.io/react/)- for composing the various components used on the front-end.
- [Redux](https://redux.js.org/)- for managing app data and app state on the front-end.
- [TypeScript](https://www.typescriptlang.org/)- for most of the JavaScript written in this app (whether the JavaScript is for the back-end or the front-end).
- [Stylus](stylus-lang.com/)- for designing the front-end. It eventually gets transpiled down to CSS.
- [Webpack](https://webpack.js.org/)- for transpiling from ES6+ to ES5, which is what most browsers understand.
- [Heroku](https://www.heroku.com)- for deploying the app online.



## Installation and setup

Here are the steps you need to follow to run this project on your computer:
- **Install Node.js**: You may visit [this link](https://nodejs.org/en/download/)
 for complete instructions on installing Node.js on your computer. Note that you need version 8 or later of Node.js to run this app.

- **Install yarn**: yarn is a package manager for Node.js packages. You may find its installation instructions [over here](https://yarnpkg.com/en/docs/install). We prefer it to npm (and other package managers out there) because it is much faster and more efficient than npm.

- **Open a terminal/command prompt** on your computer and `cd` (i.e change directory) into your
 preferred path/location.

- **Clone this repo**: Enter this command in the terminal:

```bash
git clone https://github.com/folushooladipo/moviehunt.git
```

- **Install dependencies**: Do this by running the following command:

```bash
yarn
```

- **Add the required environment variables**: Consult the `.env.sample`
 file in the root of this repository for info about the different
 environmental variables you need to specify for this app. When
 you're done, save your changes in a `.env` file in the root of
 the repo.

- **Running the app**: Enter the following command in the terminal:
```bash
yarn start
```
Wait for the app to start up. When you see a line of output in the terminal that says "App now running on port `PORT`", open a browser, visit `localhost:PORT` and you should see the app! Note that `PORT` will be the value you specified in `.env`. If you didn't specify your own desired port, `PORT` will be `5000`.

## Contributing

Found a bug? Let me know about it by creating a new issue at
 [this link](https://github.com/folushooladipo/moviehunt/issues). If you would also like to contribute a solution, consult [this document](https://help.github.com/articles/fork-a-repo/) for
 instructions on how to create a fork of this project, implement your
 solutions and submit a pull request.
 
Similarly, if you want to help add a new feature, please use
 [this document](https://help.github.com/articles/fork-a-repo/) as a guide
 on how to fork this repo, add your feature(s) and submit a pull request.
 
Lastly, you can send your
 suggestions, feedback etc by tweeting at the
 Lead Developer,
 [Folusho Oladipo](https://twitter.com/folushooladipo).


## License

This project is authored by [Folusho Oladipo](https://www.linkedin.com/in/folushooladipo/)
  and is licensed for your use, modification and distribution under
  [the MIT license](https://en.wikipedia.org/wiki/MIT_License). Feel
  free to hack, extend and share it!

Thanks and see you at the movies!
