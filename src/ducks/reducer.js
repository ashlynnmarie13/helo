const initialState = {
  username: "",
  userid: "",
  profilepic: ""
};

const CREATE_USER = "CREATE_USER";

//state has a default of initialState
// CAN YOU EXPLAIN THIS AND HOW IT MAY CHANGE
export default function reducer(state = initialState, action) {
  switch (action.type) {
    //referencing the addUser payload
    case CREATE_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export function addUser(username, userid, profilepic) {
  return {
    //create user matches above
    type: CREATE_USER,
    // this is the action builder with a payload
    payload: {
      username,
      userid,
      profilepic
    }
  };
}
