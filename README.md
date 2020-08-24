# vue-websocket-notifications

Ask for user consent to display desktop notifications, connect to a websocket server and display desktop notification in a vuejs app.


## Introduction

This is a sample application which demonstrates the use of Web Notifications API and Web Sockets API in a vue js app.


Once you start the app, browser will display a box asking you to Allow or Deny displaying desktop notifications. You can allow or deny it. User's consent is stored in a module in the vuex store which can be used to check the consent state application wide.

After that it will connect to a web socket server using browser's inbuilt [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) object.

I have used the websocket echo server so that you can test it locally. You can try sending a test  message by clicking the Test Notification button. A test message is sent to the echo server which then returns it. It is captured by our websocket onmessage listener from where we display the notification. 

[NotifyJS](https://www.npmjs.com/package/notifyjs) has been used to display the notifications.

## Installation

```sh
# clone the repo
$ git clone [https://github.com/vijay-joshi/vue-websocket-notifications]

# change to directory
$ cd vue-notifcations

# install dependencies
$ npm install

# this will serve the website locally at http://localhost:8080/
$ npm run serve

```

You can change the websocket URL from .env file.


## Screenshots

Asking for user consent

![Asking for user consent](https://github.com/vijay-joshi/vue-websocket-notifications/blob/master/src/assets/notif1.png?raw=true)

Example notification

![Example notification](https://github.com/vijay-joshi/vue-websocket-notifications/blob/master/src/assets/notif2.png?raw=true)
