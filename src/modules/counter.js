import { createAction, handleActions } from 'redux-actions';

import produce from 'immer';

export const creators = {
  INCREMENT: '@counter/INCREMENT',
  DECREMENT: '@counter/DECREMENT',
  INCREMENT_ASYNC: '@counter/INCREMENT_ASYNC'
};

export const actions = {
  increment: createAction(creators.INCREMENT, payload => payload),
  decrement: createAction(creators.DECREMENT, payload => payload),
  incrementAsync: createAction(creators.INCREMENT_ASYNC, payload => payload)
};

const initialState = {
  number: 0
};

const reducer = handleActions({
  [creators.INCREMENT]: (state, action) => produce(state, draft => {draft.number += action.payload}),
  [creators.DECREMENT]: (state, action) => produce(state, draft => {draft.number -= action.payload})
}, initialState);

export default reducer;
