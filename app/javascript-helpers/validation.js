const isAnyObjectValueBlank = (object, ...keys) => {
  for (let i = 0; i < keys.length; i++) {
    // I use classic for loop here only so I don't have to make additional boolean variable (because forEach doesn't end the whole function when we return the statement)
    if (object.get(keys[i]) == "") {
      return true;
    }
  }

  return false;
};

export { isAnyObjectValueBlank };
