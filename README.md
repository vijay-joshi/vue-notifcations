# vue-notifications

Ask for user consent to display desktop notifications, connect to a websocket server and display desktop notification in a vuejs app.


## Introduction

This is a sample application which demonstrates the use of Web Notifications API and Web Sockets API in a vue js app.

Once you start the app, browser will display a box asking you to Allow or Deny displaying desktop notifications. You can allow or deny it.

After that it will connect to a web socket server using browser's inbuilt [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) object.

I have used the websocket echo server so that you can test it locally. You can try sending a test  message by clicking the Test Notification button.

## Installation

```sh
# clone the repo
$ git clone [https://github.com/vijay-joshi/vue-notifcations.git]

# change to directory
$ cd vue-notifcations

# install dependencies
$ npm install

# this will serve the website locally at http://localhost:4000/
$ npm run serve

```

You can change the websocket URL from .env file.
