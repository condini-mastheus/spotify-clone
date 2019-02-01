/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'playlistsDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistsDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

/**
 * Reducers
 */
export default function playlistsDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  getPlaylistsDetailsRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),
  getPlaylistsDetailsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
