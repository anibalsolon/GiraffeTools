// A file with general preferences (UI theme, object sizes/colours)
import {
  SET_USER,
  SET_REPOSITORY,
  SET_BRANCH,
  SET_COMMIT,
  SET_PORK_FILE
} from "../actions/actionTypes";

const INITIAL_STATE = {
  user: null,
  repository: null,
  branch: null,
  commit: null,
  pork_file: null
};

const user = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload.user };
    case SET_REPOSITORY:
      return { ...state, repository: payload.repository };
    case SET_BRANCH:
      return { ...state, branch: payload.branch };
    case SET_COMMIT:
      return { ...state, commit: payload.commit };
    case SET_PORK_FILE:
      return { ...state, pork_file: payload.pork_file };
    default:
      return state;
  }
  return state;
};

export default user;
