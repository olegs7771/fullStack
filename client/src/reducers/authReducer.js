import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is_Empty";

const initialState = {
  authenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        authenticated: false
      };

    default:
      return state;
  }
}
