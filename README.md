# The GoodGym App

### A single-page app to interact with the GoodGym API.

Built using AngularJS and styling inspiration taken from [Mailchimp's UX Patterns](https://ux.mailchimp.com/patterns/), where I've started to refactor and partial their rather large css file.  Further developments on this are welcomed! :)

#### Installation

This app was scaffolded with [Yeoman](http://yeoman.io).  It uses Grunt to build, preview and test. Bower handles the dependencies.  It is also using Compass to precompile the Sass to CSS.

So first off, let's install Yeoman.

`npm install -g yo`

Yeoman also installs Grunt and Bower for us.  Then let's install the dependencies specific to this project

`bower install`
and
`npm install`

Now install grunt locally to the project

`npm install grunt --save-dev`

Then we need to add compass if you don't have it in your $PATH already

`gem install compass`

You should now be all set to run.

`grunt server`

Should now compile and serve up the application for you.
