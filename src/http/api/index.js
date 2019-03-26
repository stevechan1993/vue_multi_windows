import * as admin from "./admin";
import * as inexbot from "./inexbot";

const apis = {
  admin,
  inexbot
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return apis;
      }
    }
  });
};
export default {
  install
};
