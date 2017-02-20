import app = require("application");
import firebase = require("nativescript-plugin-firebase");

app.cssFile = "./app.css";
app.start({ moduleName: "main-page" });

firebase.init({
    onPushTokenReceivedCallback: function (token) {
        console.log("Firebase plugin received a push token: " + token);
    },
    onMessageReceivedCallback: function (message) {
        console.log("----- message received: " + message);
    }
}).then(
    function (result) {
        console.log("Firebase is ready");
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
);