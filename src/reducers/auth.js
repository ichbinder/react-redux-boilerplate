const initialState = {
  token: null
};

export default function auth( state = initialState, action ) {
  if ( action.type === 'GET_TOKEN' ) {
    return Object.assign( {}, state, { token: action.token } );
  }
  return state;
}
