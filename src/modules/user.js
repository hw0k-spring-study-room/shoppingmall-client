import { createAction, handleActions } from 'redux-actions';

import produce from 'immer';

export const creators = {
  LOGIN_ATTEMPT: '@user/LOGIN_ATTEMPT',
  LOGIN_SUCCESS: '@user/LOGIN_SUCCESS',
  LOGIN_REJECT: '@user/LOGIN_REJECT'
};

export const actions = {
  loginAttempt: createAction(creators.LOGIN_ATTEMPT, payload => payload),
  loginSuccess: createAction(creators.LOGIN_SUCCESS, payload => payload),
  loginReject: createAction(creators.LOGIN_REJECT, payload => payload)
};

const initialState = {
  user: {},
  isLoading: false,
  isErrored: false
};

const reducer = handleActions({
  [creators.LOGIN_ATTEMPT]: (state, action) => produce(state, draft => {
    draft.user = {};
    draft.isLoading = true;
    draft.isErrored = false;
  }),
  [creators.LOGIN_SUCCESS]: (state, action) => produce(state, draft => {
    draft.user = action.payload;
    draft.isLoading = false;
  }),
  [creators.LOGIN_REJECT]: (state, action) => produce(state, draft => {
    draft.user = {};
    draft.isLoading = false;
    draft.isErrored = true;
  })
}, initialState);

export default reducer;
