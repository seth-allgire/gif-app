import { SET_USER, CLEAR_USER } from "../actions";

export default function userReducer(state = "", action) {
  switch (action.type) {
    case SET_USER:
      return action.username;
    case CLEAR_USER:
      return "";
    default:
      return state;
  }
}
