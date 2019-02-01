/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

/**
 * Reducers
 */
export default function playlists(state = INITIAL_STATE, action) {
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
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
