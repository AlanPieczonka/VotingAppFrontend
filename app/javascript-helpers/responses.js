function setSuccessResponse(email) {
  return this.setProperties({
    responseMessage: `Your Account has been created. You can easily log in, ${email}`,
    isSuccess: true
  });
}

function setFailureResponse(error = 'We cannot define the problem') {
  return this.setProperties({
    responseMessage: `There has been an error. ${error}. Please try again later`,
    isSuccess: false
  });
}

function setInvalidDataResponse() {
  return this.setProperties({
    responseMessage: 'Your data is invalid. Please enter valid credentials',
    isSuccess: false
  });
}

function setNullDataResponse() {
  return this.setProperties({
    responseMessage: null,
    isSuccess: null
  });
}

export {
  setSuccessResponse,
  setFailureResponse,
  setInvalidDataResponse,
  setNullDataResponse
};
