"use strict";
var main_view_model_1 = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.DemoAppModel();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxREFBaUQ7QUFDakQsb0JBQW9CLElBQUk7SUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksOEJBQVksRUFBRSxDQUFDO0FBQzNDLENBQUM7QUFDRCxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcHBNb2RlbCB9IGZyb20gXCIuL21haW4tdmlldy1tb2RlbFwiO1xuZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzKSB7XG4gIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG4gIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgRGVtb0FwcE1vZGVsKCk7XG59XG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuIl19