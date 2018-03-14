import Component from "@ember/component";

const Universal = Component.extend({
  tagName: "div",

  classNames: ["alert"],
  classNameBindings: ["isSuccess:alert-success:alert-danger"],
  isSuccess: true,

  attributeBindings: ["style", "role"],
  style: "margin-top: 10px;",
  role: "alert"
});

Universal.reopenClass({
  positionalParams: ["message", "isSuccess"]
});

export default Universal;
