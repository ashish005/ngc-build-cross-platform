# Angular Setup - Webpack, Ahead-of-Time (Aot) Compilation, Lazy Loading and Treeshaking runnable on every Platform (Cross Platform)

This repository offers you one demo application implemented 'Angular with Webpack' to run on every platform (Cross Platform)

### Check the corresponding package.json for the npm commands to start the repository

## Prerequisites 

Please install cordova and the trash-cli globally to handle cross platform for the [Webpack-Demo](https://github.com/ashish005/ngc-build-cross-platform.git)

```npm install cordova -g```

* [XCode](https://developer.apple.com/xcode/download/)
* [Android SDK](https://developer.android.com/sdk/index.html)
* [Windows 10 SDK](https://dev.windows.com/en-us/downloads/windows-10-sdk)

## Angular Client with Webpack, Treeshaking and Ahead of Time (Aot) Compilation (Folder: "ngc-build-cross-platform")

This client is implemented with Angular and Webpack. You can start the application by running

``` yarn ``` and ```npm start``` the application starts and runs in your default browser.

By typing

`npm run webpack-dev` the application is build without treeshaking and AoT in a .dist/web/jit folder.

If you type

```npm run webpack-prod``` the application is build with treeshaking and AoT in a .dist/web/aot folder.

After the aot compilation you can start the application by typing

`npm run lite`

You can build Cross Platform by typing

```npm run build-all``` for building Web, Desktop (Windows and Linux) and Apps for Android and Windows Phone in the .dist folder.