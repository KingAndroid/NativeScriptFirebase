"use strict";
var observable_1 = require("data/observable");
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var DemoAppModel = (function (_super) {
    __extends(DemoAppModel, _super);
    function DemoAppModel() {
        return _super.call(this) || this;
    }
    DemoAppModel.prototype.doInit = function () {
        firebase.init({}).then(function (result) {
            console.log("Firebase is ready");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    DemoAppModel.prototype.doRegisterPushHandlers = function () {
        firebase.addOnPushTokenReceivedCallback(function (token) {
            // you can use this token to send to your own backend server,
            // so you can send notifications to this specific device
            console.log("Firebase plugin received a push token: " + token);
            // var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
            // pasteboard.setValueForPasteboardType(token, kUTTypePlainText);
        });
        firebase.addOnMessageReceivedCallback(function (message) {
            console.log("----- message received: " + message);
            dialogs.alert({
                title: "Push message: " + (message.title !== undefined ? message.title : ""),
                message: JSON.stringify(message),
                okButtonText: "Sw33t"
            });
        }).then(function () {
            console.log("*********************************** success @ addOnMessageReceivedCallback");
        }, function (err) {
            console.log("*********************************** error @ addOnMessageReceivedCallback: " + err);
        });
    };
    ;
    return DemoAppModel;
}(observable_1.Observable));
exports.DemoAppModel = DemoAppModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFDN0Msb0NBQXVDO0FBR3ZDLHVEQUEwRDtBQUUxRDtJQUFrQyxnQ0FBVTtJQUMxQztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ2IsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFVLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUNELFVBQVUsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsNkNBQXNCLEdBQXRCO1FBQ0UsUUFBUSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsS0FBSztZQUNyRCw2REFBNkQ7WUFDN0Qsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDL0QsbUZBQW1GO1lBQ25GLGlFQUFpRTtRQUNuRSxDQUFDLENBQ0EsQ0FBQztRQUVGLFFBQVEsQ0FBQyw0QkFBNEIsQ0FDbkMsVUFBVSxPQUFPO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNaLEtBQUssRUFBRSxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM1RSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2hDLFlBQVksRUFBRSxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDLElBQUksQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtRQUMzRixDQUFDLEVBQUUsVUFBVSxHQUFHO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0RUFBNEUsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNqRyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDO0lBQ0osbUJBQUM7QUFBRCxDQUFDLEFBMUNELENBQWtDLHVCQUFVLEdBMEMzQztBQTFDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuaW1wb3J0IHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuaW1wb3J0IGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmV4cG9ydCBjbGFzcyBEZW1vQXBwTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGRvSW5pdCgpIHtcbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICB9KS50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGlzIHJlYWR5XCIpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgXG4gIGRvUmVnaXN0ZXJQdXNoSGFuZGxlcnMoKSB7XG4gICAgZmlyZWJhc2UuYWRkT25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgLy8geW91IGNhbiB1c2UgdGhpcyB0b2tlbiB0byBzZW5kIHRvIHlvdXIgb3duIGJhY2tlbmQgc2VydmVyLFxuICAgICAgLy8gc28geW91IGNhbiBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gdGhpcyBzcGVjaWZpYyBkZXZpY2VcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcGx1Z2luIHJlY2VpdmVkIGEgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAvLyB2YXIgcGFzdGVib2FyZCA9IHV0aWxzLmlvcy5nZXR0ZXIoVUlQYXN0ZWJvYXJkLCBVSVBhc3RlYm9hcmQuZ2VuZXJhbFBhc3RlYm9hcmQpO1xuICAgICAgLy8gcGFzdGVib2FyZC5zZXRWYWx1ZUZvclBhc3RlYm9hcmRUeXBlKHRva2VuLCBrVVRUeXBlUGxhaW5UZXh0KTtcbiAgICB9XG4gICAgKTtcblxuICAgIGZpcmViYXNlLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soXG4gICAgICBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIlB1c2ggbWVzc2FnZTogXCIgKyAobWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS50aXRsZSA6IFwiXCIpLFxuICAgICAgICAgIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTdzMzdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN1Y2Nlc3MgQCBhZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrXCIpXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBlcnJvciBAIGFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IFwiICsgZXJyKVxuICAgIH0pO1xuICB9O1xufSJdfQ==