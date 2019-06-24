import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import user from './user';

export default history => combineReducers({
  router: connectRouter(history),
  counter,
  user
});
