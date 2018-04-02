import Component from "@ember/component";

const Universal = Component.extend({
  tagName: "div",
  classNames: ["alert", "margin-top--10"],
  classNameBindings: ["isSuccess:alert-success:alert-danger"],
  attributeBindings: ["role"],
  role: "alert",

  isSuccess: true,
});

export default Universal;
