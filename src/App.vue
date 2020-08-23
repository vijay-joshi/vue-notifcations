<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Showing desktop notifications using websockets</h1>
    <p class="desc">
      This is a sample application which demonstrates the use of Web Notifications API and Web Sockets API in a vue js app.
      <br>
      <br>
      <br>
      Click the button below to test.
    </p>
    <p>
      <button @click="sendNotification">Show Test Notification</button>
    </p>
    <ul>
      <li>Read <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">this blog post</a> for more details</li>
    </ul>
  </div>
</template>

<script>
import { initSocket, sendTestNotification  }  from './/services/WebSocketConnection';
import { setDesktopNotificationConsent } from '@/services/NotificationConsent';

export default {
  name: 'App',
  data() {
    return {
      testMessageTitle: 'Hola!',
      testMessageBody: 'I can have notifications!',
    }
  },
  created() {
    this.bootstrapNotifications();
  },
  methods: {
    sendNotification() {
      sendTestNotification(this.testMessageTitle, this.testMessageBody);
    },
    async bootstrapNotifications() {
      try {
        // ask if notifications can be displayed
        setDesktopNotificationConsent();
        initSocket();
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}
p.desc {
  margin: 0 auto;
  max-width: 400px;
}
ul {
  display: none;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
