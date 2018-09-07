const initialState = {
  username: "",
  userid: "",
  profilepic: ""
};

const CREATE_USER = "CREATE_USER";

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

    payload: {
      username,
      userid,
      profilepic
    }
  };
}
