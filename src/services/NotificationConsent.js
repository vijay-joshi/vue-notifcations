import Noty from 'notifyjs';
import store from '../store';

export function setDesktopNotificationConsent() {
    if(!Noty.isSupported) {
        // this browser does not support notifications; no point is asking
        return;
    }
    if(!Noty.needsPermission) {
        // means permission already granted
        console.log('permission granted');
        store.commit('notifications/setDesktopNotifications', true);
    } else {
        store.commit('notifications/setDesktopNotifications', false);
        // ask for permission
        Noty.requestPermission(() => {
            // permission granted
            console.log('permission granted');
            store.commit('notifications/setDesktopNotifications', true);
        }, () => {
            // permission denied
            console.log('permission denied');
            store.commit('notifications/setDesktopNotifications', false);
        });
    }
}

