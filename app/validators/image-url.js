/* eslint-disable */
export default function validateImageUrl() {
  return (_, newValue) => {
    const myRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i;
    return myRegex.test(newValue) || "Please enter valid image URL";
  };
}
