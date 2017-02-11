import { Observable } from "data/observable";
import dialogs = require("ui/dialogs");
import utils = require("utils/utils");
import fs = require("file-system");
import firebase = require("nativescript-plugin-firebase");

export class DemoAppModel extends Observable {
  constructor() {
    super();
  }

  doInit() {
    firebase.init({
    }).then(
      function (result) {
        console.log("Firebase is ready");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
    );
  }
  
  doRegisterPushHandlers() {
    firebase.addOnPushTokenReceivedCallback(function (token) {
      // you can use this token to send to your own backend server,
      // so you can send notifications to this specific device
      console.log("Firebase plugin received a push token: " + token);
      // var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
      // pasteboard.setValueForPasteboardType(token, kUTTypePlainText);
    }
    );

    firebase.addOnMessageReceivedCallback(
      function (message) {
        console.log("----- message received: " + message);
        dialogs.alert({
          title: "Push message: " + (message.title !== undefined ? message.title : ""),
          message: JSON.stringify(message),
          okButtonText: "Sw33t"
        });
      }
    ).then(function () {
      console.log("*********************************** success @ addOnMessageReceivedCallback")
    }, function (err) {
      console.log("*********************************** error @ addOnMessageReceivedCallback: " + err)
    });
  };
}