/**
 * Types
 */
export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const INITIAL_STATE = {
  isVisible: false,
  message: '',
};

/**
 * Reducers
 */
export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return {
        ...state,
        isVisible: true,
        message: action.payload.message,
      };
    case Types.HIDE:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  setError: message => ({ type: Types.SET, payload: { message } }),
  hideError: () => ({ type: Types.HIDE }),
};
