import { TEST_ACTION } from "../actions/types";

const initialState = {
  authenticate: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return state;
    default:
      return state;
  }
}
