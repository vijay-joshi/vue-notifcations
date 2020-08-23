const state = {
    webSocketConnected: false,
    displayDesktopNotifications: false
};

const getters = {
    desktopNotificationsEnabled(state) {
        return state.displayDesktopNotifications;
    }

};

const mutations = {
    setWebSocketConnected(store, webSocketConnected) {
        store.webSocketConnected = webSocketConnected;
    },

    setDesktopNotifications(store, isEnabled) {
        store.displayDesktopNotifications = isEnabled;
    }
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};