import store from '../store';
import Notify from 'notifyjs';

let ws = null;
   function initSocket() {
        // create new connection
        console.log(`${process.env.VUE_APP_WEBSOCKET_URL}`);
        ws = new WebSocket(`${process.env.VUE_APP_WEBSOCKET_URL}`);
        // register event handlers
        ws.onopen = connectionOpened;
        ws.onmessage = onMessage;
        ws.onerror = onError;
        // ws.onclose = onClose;
    }

    function connectionOpened() {
      console.log('connected to websocket');
      // update store that we socket is connected now
      store.commit('notifications/setWebSocketConnected', true);
   }

    // this function is just for test purpose. Itsends a test notification to Echo Test Server
    // eslint-disable-next-line
    function sendTestNotification(title, body) {
      let message = { title, body };
      ws.send(JSON.stringify(message));
    }

    // called when socket is closed
    // eslint-disable-next-line
    function onClose(messageEvent) {
        console.log('connection closed');
        console.log(messageEvent);
    }

    // called when a message is received from socket
    function onMessage(messageEvent) {
      console.log(messageEvent);
      if(!store.state.notifications.webSocketConnected) {
        console.log('socket not connected');
        return;
      }
      // has user granted permission to display desktop notifications
      if(store.state.notifications.displayDesktopNotifications) {
        const message = JSON.parse(messageEvent.data);

        // create Notify notifications
        var myNotification = new Notify(message.title, {
          body: message.body,
          icon: 'https://placekitten.com/g/96/96'
        });

        // display this notification
        myNotification.show();
      }
    }

    function onError(err) {
      console.log('error connecting to socket');
      console.log(err);
    }

    export { initSocket, sendTestNotification };
    