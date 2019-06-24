import React from 'react';
import CounterContainer from './CounterContainer';
import LoginContainer from './LoginContainer';

import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Link to="/"><button>홈으로</button></Link>
      <Link to="/counter"><button>카운터로</button></Link>
      <Link to="/login"><button>로그인으로</button></Link>
      <Switch>
        <Route path="/" exact component={() => (<div>Hello world!</div>)} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route component={() => (<div>404</div>)} />
      </Switch>
    </>
  );
};

export default App;
