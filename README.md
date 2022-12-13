# WebSack
Start building your dream projects with this webpack starter kit using React!

## Installing using degit

In your commnad prompt run : 

```
$ npx degit AmishMishra11/my-webpack <"your app name">
```

This command will make a repo of webpack on your local machine. Open the project in your IDE and do:

```
$ npm run build
```
###### You are now ready to start building your project! 😀

Do an ``` npm start ``` to see live dev setup.



## Features: 
###### Configuration File

A ```webpack.config.js``` file to serve a a single js file. It will complile different js files into one.

###### Loaders

To compile and bundle non js types of resourses.

###### Babel

To convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

###### CSS

Enables your app to have styling.

###### Assets

Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders.

###### HTML web pack plugin

This will automate the ```index.html``` file changes

###### Code splitting

Separating Vendor bundle and program code

###### Caching

Caches resources to improve more download over heads.

###### Dev Setup

Setting up dev server so we don't have to so a ```npm run build``` every time.

## How does websack implement Caching?

Websack uses [contenthash] to implement filename substititions . The hash associsted with every file changes only when the content inside the file changes , otherwise it remains same . A changed hash in turn changes the name of the file to a new one . On the client only those files are downloaded again whose name has been changed while others get `cached`.

### In `webpack.config.js` you can see inside output object
`filename: "[name].[contenthash].bundle.js"`

This [contnethash] is responsible for implemeting caching in websack.
