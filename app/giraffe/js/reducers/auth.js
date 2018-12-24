import { UPDATE_AUTH } from "../../../giraffe/js/actions/actionTypes";

const INITIAL_STATE = {
  access_token: false,
  github_email: false,
  github_handle: false,
  github_name: false
};

const auth = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_AUTH:
      const auth = payload.auth;
      return { ...state, auth: { ...state.auth, auth } };
    default:
      return state;
  }
  return state;
};

export default auth;
