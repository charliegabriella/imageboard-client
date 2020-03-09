import request from "superagent"; //CONNECTS CLIENT 2 SERVER

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";
export const NEW_USER = "NEW_USER";

const baseUrl = "http://localhost:4000";

//GETTING ALL IMAGES
function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

//CREATING IMAGE
function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/image`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

//LOG IN
export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = jwt(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};

//SING UP AS NEW USER
function addUser(payload) {
  return {
    type: "NEW_USER",
    payload
  };
}

export const signup = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/signup`)
    .send({ email, password })
    .then(response => {
      const action = addUser(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
