import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

const INITIAL_STATE = {
  modals: []
};

const modals = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return { ...state, modals: state.modals.concat(payload.item) };
    case CLOSE_MODAL:
      return {
        ...state,
        modals: state.modals.filter(item => item.id !== payload.id)
      };
    default:
      return state;
  }
  return state;
};

export default modals;
