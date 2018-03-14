import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";
export default Component.extend({
  classNames: ["navbar navbar-expand-lg navbar-light bg-light"],

  session: service(),
  actions: {
    invalidateSession() {
      const data = localStorage.getItem("ember_simple_auth-session");

      return get(this, "session").invalidate(data);
    }
  }
});
