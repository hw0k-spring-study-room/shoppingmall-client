import React from 'react';
import CounterContainer from './CounterContainer';

import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => (<div>Hello world!</div>)} />
        <Route path="/counter" component={CounterContainer} />
        <Route component={() => (<div>404</div>)} />
      </Switch>
      <Link to="/"><button>홈으로</button></Link>
      <Link to="/counter"><button>카운터로</button></Link>
    </>
  );
};

export default App;
