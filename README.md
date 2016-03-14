[![Dependency Status](https://david-dm.org/Blanket-Warriors/BentoTime.svg?style=flat)](https://david-dm.org/Blanket-Warriors/BentoTime)
[![Build Status](https://travis-ci.org/Blanket-Warriors/BentoTime.svg?branch=master)](https://travis-ci.org/Blanket-Warriors/BentoTime)

# BentoTime
A native pc/mac/linux app for reading and saving manga.

## Usage
  - install dependencies - `npm install`
  - make sure all the tests are running - `npm test`
  - run Webpack dev server - `npm start`
  
### Electron
Run these two commands simultaneously in different console tabs.
`npm start`
`npm run electron`

## Contributing
Use our [contribution repo](https://github.com/Blanket-Warriors/Style-Guide/tree/master/Contribution) to get an idea of the format we expect for PR's, commits, and issues.

## Technologies
### Electron
[Electron](http://electron.atom.io/) lets us build native desktop applications using web technologies!

### React
[React](https://facebook.github.io/react/) helps us render the views of our application.

### Redux
[Redux](http://rackt.org/redux/) is a library that helps us manage the dataflow of our application.

### Lodash
[Lodash](https://lodash.com/docs) is a very solid and fast library of utility functions. Their documentation is fantastic, and we supply links in our readmes whenever possible.

### RxJs
[RxJs](http://reactivex.io/) is a library that allows us to deal with asynchronous problems using the concept of observables. This is awesome because it allows us to deal with one interface when using asynchronous tasks that might normally be handled in different ways, such as api requests, streams, and listener events. Admittedly, it is not used to its fullest potential in this project because we mainly deal with simple api requests. However we thought it was a good learning opportunity and think that observables are just kinda cool. If you would like to get more into programming in this style, we'd recommend taking a look at [Jafar Husain's tutorial](http://reactivex.io/learnrx/), which is just awesome.

### Webpack
[Webpack](https://webpack.github.io/) is a tool to help us compile and package our Javascript.  This allows us to use [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [SASS](http://sass-lang.com/) and cool new Javascript features via [Babel](https://babeljs.io/). The [React Webpack Cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html) is a pretty good place to start getting used to using Webpack with React.

## License
MIT © [Blanket Warriors](http://blanketwarriors.com)
