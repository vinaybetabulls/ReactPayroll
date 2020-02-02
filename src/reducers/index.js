import { CHANGE_STATE } from "../constants";
const initialState = {
  employee: {
    employeeName: "Mani",
    age: 30
  }
};

// step 2
// reducers
export const changeState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      return Object.assign({}, state, {
        employee: {
          employeeName: action.payload.employeeName,
          age: action.payload.age
        }
      });

    default:
      return state;
  }
};

export default changeState;
