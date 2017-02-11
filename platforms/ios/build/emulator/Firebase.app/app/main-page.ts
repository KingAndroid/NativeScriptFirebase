import { DemoAppModel } from "./main-view-model";
function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = new DemoAppModel();
}
exports.pageLoaded = pageLoaded;
