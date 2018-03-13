const postData = async (source, object) => {
  let response = await fetch(source, {
    body: JSON.stringify(object),
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    method: "POST"
  });
  let data = await response.json();

  return data;
};

export { postData };
