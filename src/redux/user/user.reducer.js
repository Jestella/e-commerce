import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
    default:
      return {
        ...state,
        currentUser: action.payload,
      };
  }
};

export default userReducer;
