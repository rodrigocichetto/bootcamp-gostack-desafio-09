import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

const user = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.profile = action.payload.user;
        break;
      default:
    }
  });
};

export default user;
